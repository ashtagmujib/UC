const 

    body = document.querySelector('body'),
    container =  document.querySelector('.container'),

    inputTab = document.querySelector('.input'),
    courseName = document.querySelector('#course-name'),
    courseUnit = document.querySelector('#course-unit'),
    courseGrade = document.querySelector('#course-grade'),
    gradeValue = document.querySelector('#grade-value'),
    addCourse = document.querySelector('#add-course'),

    output = document.querySelector('.output'),
    outputControl = document.querySelector('.output-control'),
    calculate = document.querySelector('#calculate')
;  

let isValid = false,
    courseSTore = [],
    parsedCourseStore = []
;




inputTab.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();

    if(isValid === true) {
       createOutput();
    } 

    else {
        alert('please enter all fields')
    }
    

})




//from validation

// grade selcetion
courseGrade.addEventListener('click', e => {
    courseGrade.classList.toggle('active');

    if(e.target.matches('#grade')) {
        gradeValue.innerText = e.target.innerText;
    }
})


// input tabs validation

const validateForm = () => {
    let course = courseName.value.trim(),
        unit = courseUnit.value.trim(),
        grade = gradeValue.innerText
    ;   
    
    
    if(course === ''|| unit === '' || grade === '' ) {
        isValid = false;
    } else {
        isValid = true;
    } 
}






// create output elements
const createOutput = () => {

    // create elements
    let courseDts = document.createElement('div');
    let courseOutput = document.createElement('p');
    let unitOutput = document.createElement('p');
    let gradeOutput = document.createElement('p');
     
    
    // add classname to elements
    courseDts.className = 'course-dts'
    courseOutput.className = 'course-output';
    unitOutput.className = 'unit-output';
    gradeOutput.className = 'grade-output';



    // get text value from input and add to output
    courseOutput.innerText = courseName.value;
    unitOutput.innerText = courseUnit.value;
    gradeOutput.innerText = gradeValue.innerText;


    // append to parent
    courseDts.appendChild(courseOutput);
    courseDts.appendChild(unitOutput);
    courseDts.appendChild(gradeOutput);

    outputControl.appendChild(courseDts);

    courseName.value = '';
    courseUnit.value = '';
    gradeValue.innerText = '';

    // add course to the store for storage

    let course = {
        course: courseOutput.innerText,
        unit: unitOutput.innerText,
        grade: gradeOutput.innerText 
    }
    

    courseSTore.push(course);

    localStorage.setItem('courseDts', JSON.stringify(courseSTore))

}




let parsedCourse = JSON.parse(localStorage.getItem('courseDts'));

if (parsedCourse) {

    parsedCourse.forEach(course => {
        courseSTore.push(course);


        // create elements
        let courseDts = document.createElement('div');
        let courseOutput = document.createElement('p');
        let unitOutput = document.createElement('p');
        let gradeOutput = document.createElement('p');
            

        // add classname to elements
        courseDts.className = 'course-dts'
        courseOutput.className = 'course-output';
        unitOutput.className = 'unit-output';
        gradeOutput.className = 'grade-output';



        // get text value from input and add to output
        courseOutput.innerText = course.course;
        unitOutput.innerText = course.unit;
        gradeOutput.innerText = course.grade;



        // append to parent
        courseDts.appendChild(courseOutput);
        courseDts.appendChild(unitOutput);
        courseDts.appendChild(gradeOutput);

        outputControl.appendChild(courseDts);

    })

}





//calculate gpa

const calculateGpa = () => {

    //sum up the units value
    calculatetotalUnit()

    // multiply grade and unit value
    gradeXunit()

    // divide the total course value form the total credit
    gpa()

}








//sum up the units value
const calculatetotalUnit = () => {
    const unitOutput = Array.from(document.querySelectorAll('.unit-output'));     

    let unitsTotal = [],
        unitSum = 0;
    ;


    // add unit value to unitsTotal array
    unitOutput.forEach(unit => {
       let unitValue = unit.innerText
       unitsTotal.push(unitValue);
    })


    // convert the array of strings to numbers
    let unitNum = unitsTotal.map(toNumbers);
    function toNumbers(value) {
        return +value;
    }

    // sum up the numbers in the unit numbers
    for(let i = 0; i < unitNum.length; i++) {
        unitSum += unitNum[i] 
    }

    // display total unit
    const totalUnit = document.querySelector('#unit-Total')
    totalUnit.innerText = unitSum;

}







// multiply grade and unit value
const gradeXunit = () => {
    const courseDts = document.querySelectorAll('.course-dts'),
        courseTotal = document.querySelector('#course-Total')
    ;

    let scorePerCourse = [],
        csTotal = 0;
    ;   

    courseDts.forEach(course => {
        let unitOutput = course.querySelector('.unit-output'),
            gradeOutput = course.querySelector('.grade-output'),
            gradeOutputTonumber = gradeOutput.innerText;
        ;

        if(gradeOutput.innerText) {

            switch (gradeOutputTonumber) {
                case 'A':
                    gradeOutputTonumber = 5;
                break;  
                
                case 'B':
                    gradeOutputTonumber = 4;
                break;  
        
                case 'C':
                    gradeOutputTonumber = 3;
                break;  
        
                case 'D':
                    gradeOutputTonumber = 2;
                break;  
        
        
                case 'E':
                    gradeOutputTonumber = 1;
                break;  
                
                case 'F':
                    gradeOutputTonumber = 0;
                break; 
                
            }
            
        }

        scorePerCourse.push(gradeOutputTonumber * unitOutput.innerText);
    })


    // sum up the numbers in the unit numbers
    for(let i = 0; i < scorePerCourse.length; i++) {
        csTotal += scorePerCourse[i];
    }

    courseTotal.innerText = csTotal;

}





// divide the total course value form the total credit
const gpa = () => {
    const courseTotal = document.querySelector('#course-Total').innerText,
        unitsTotal = document.querySelector('#unit-Total').innerText,
        GPA = document.querySelector('#gpa'),
        message = document.querySelector('.message')
    ;

    let gpa = courseTotal / unitsTotal;
    GPA.innerText = gpa

    if(GPA.innerText.length < 2) {
        GPA.innerText = `${gpa}.0`;
    } 

    else if(GPA.innerText.length > 3) {
       let x =  gpa.toString()
        GPA.innerText = x.slice(0,4)
    }
}




// display grade
const 
    blur = document.querySelector('.blur'),
    resultDisplay = document.querySelector('.result-display'),
    closeBtn = document.querySelector('#close'),
    loader = document.querySelector('.loader'),
    resultTab = document.querySelector('.result')
;    


calculate.addEventListener('click', () => {
    instructionIcon.classList.add('opened');
    if(document.querySelector('.course-dts') != null) {
        body.style.height = '100vh';
        body.style.overflow = 'hidden';
        container.style.overflow = 'hidden';
        container.style.height = '100vh';
     
        blur.style.display = 'block';
    
        
        resultDisplay.style.display = 'none';
        resultTab.style.display = 'none';
        loader.style.display = 'block';
    
        setTimeout(() => {
            // showGrade()

            loader.style.display = 'none';
            calculateGpa()
            resultTab.style.display = 'flex';
            resultDisplay.style.display = 'block';
         
            closeBtn.addEventListener('click', () => {
                container.style.overflow = 'auto';
                container.style.height = 'auto';
                body.style.height = 'auto';
                body.style.overflow = 'auto';
    
                blur.style.display = 'none';
                resultDisplay.style.display = 'none';
                resultTab.style.display = 'none';
                instructionIcon.classList.remove('opened');
                
            })


            let msgDts = document.getElementById('gpa').innerText;
            let classMsg = document.getElementById('class-msg')

            if(msgDts >= 4.5) {
                classMsg.innerText = 'congrats you are a first class student, keep up the good work'
            }

            else if(msgDts >= 3.5) {
                classMsg.innerText = 'congrats you are a second class upper student, keep up the good work'
            }

            else if(msgDts >= 2.5) {
                classMsg.innerText = 'congrats you are a third class student, try harder next time'
            }

            else if(msgDts >= 2.0) {
                classMsg.innerText = 'congrats you are on the good standing list, try harder next time'
            }

            
            else if(msgDts <= 2.0) {
                classMsg.innerText = 'try harder next time, you gat this'
            }
            
            

        }, 3000)


    } 
    
    else {
        alert('please enter course details')
    }

})




outputControl.addEventListener('click', e => {

    if(e.target.classList.contains('course-dts')) {
        e.target.classList.toggle('delete');




        let removeCourse = document.createElement('div');
        removeCourse.classList = 'remove-course';
        e.target.appendChild(removeCourse);


        removeCourse.addEventListener('click', e => {
            let target = e.target.parentElement
            target.classList.add('deleted');

            let msg = document.createElement('p');
            msg.innerText = 'course deleted succefully';
            msg.className = 'msg';
    
            output.insertBefore(msg,calculate)

            setTimeout(() => {
                outputControl.removeChild(target);
            }, 600);

            setTimeout(() => output.removeChild(msg), 610);



            // reset local storage
            let notDeleted = [];


            document.querySelectorAll('.course-dts').forEach(crs => {

                let courseOutput = crs.querySelector('.course-output').innerText;
                let unitOutput = crs.querySelector('.unit-output').innerText;
                let gradeOutput = crs.querySelector('.grade-output').innerText;
    
                
                let course = {
                    course: courseOutput,
                    unit: unitOutput,
                    grade: gradeOutput
                }

                if(crs.classList.contains('deleted')) {
                    return false;
                } 
                
                else {
                    notDeleted.push(course);
                }
            })

            localStorage.setItem('courseDts', JSON.stringify(notDeleted));

        })

    }
})








const introLoader = document.querySelector('.intro-loader');
const instructionIcon = document.querySelector('.instruction-icon');

setTimeout(() => {
    container.removeChild(introLoader)
    document.querySelector('.calculator-page').classList.add('active');
    instructionIcon.style.display = 'flex';

},3700)



const info = document.querySelector('.info');
const infoTab = document.querySelector('.info-tab')
const closeinfo = document.getElementById('close-info')

info.addEventListener('click', e=> {
    infoTab.classList.add('active');
    infoTab.classList.remove('closed');
    container.style.height = '100vh';
    container.style.overflowY = 'hidden';
    
    blur.style.display = 'block';

    instructionIcon.classList.add('opened');
})

closeinfo.addEventListener('click', e=> {
    infoTab.classList.remove('active');
    infoTab.classList.add('closed');
    container.style.height = 'auto';
    container.style.overflowY = 'auto';
    blur.style.display = 'none';

    instructionIcon.classList.remove('opened');
})


let steps = document.querySelectorAll('.step')

steps.forEach(step => {

    step.addEventListener('click', (e)=> {
        step.classList.toggle('active');
        
        steps.forEach(stp => {
            if(stp !== step) {
                stp.classList.remove('active')
            }
        })
    })


})




instructionIcon.addEventListener('click', e=> {
    let instructions = document.querySelector('.instructions');
    let closeInstruction = document.getElementById('close-instruction');

    instructions.classList.add('active');
    instructionIcon.classList.add('opened');
    container.style.height = '100vh';
    container.style.overflowY = 'hidden';


    let num = document.querySelectorAll('#num');
    num.forEach(number => {
        number.style.display = 'flex';
    })


    closeInstruction.addEventListener('click', e=> {
        instructions.classList.remove('active');
        instructionIcon.classList.remove('opened');

        container.style.height = 'auto';
        container.style.overflowY = 'auto';

        num.forEach(number => {
            number.style.display = 'none';
        })
    })


})
