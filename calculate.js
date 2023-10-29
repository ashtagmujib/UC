// input and out put constants
const inputTab = document.querySelector('.input'),
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
    courseSTore = []
;



inputTab.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();

    if(isValid === true) {
       createOutput();
    } 
    else {

        let container =  document.querySelector('.container');
        container.style.overflow = 'hidden';
        container.style.height = '100vh';
        document.querySelector('body').style.height = '100vh';

        blur.style.display = 'block';
        let  msg = document.createElement('div');
        msg.className = 'error-msg';

        let removeMsg = document.createElement('p');
        removeMsg.innerText = 'close';
        removeMsg.className = 'close-alert'
        let msgValue = document.createTextNode('please enter all fields');

        msg.appendChild(msgValue)
        msg.appendChild(removeMsg)

        document.querySelector('body').appendChild(msg)

        removeMsg.addEventListener('click', () => {
            container.style.overflow = 'auto';
            container.style.height = 'auto';
            document.querySelector('body').style.height = 'auto';
            blur.style.display = 'none';
            msg.style.display = 'none';
        })
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
    courseSTore.push(courseDts);

    //localStorage.setItem('courseDts', JSON.stringify(courseSTore))
    console.log(courseSTore)
    console.log(localStorage)

}

// let parsedTask = JSON.parse(localStorage.getItem('courseDts'));





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


    // console.log(unitsTotal)
    // console.log(unitNum)
    // console.log(unitSum)
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

        // console.log(gradeOutputTonumber)
        // console.log(gradeOutput.innerText)
        // console.log(unitOutput.innerText)
    })


    // sum up the numbers in the unit numbers
    for(let i = 0; i < scorePerCourse.length; i++) {
        csTotal += scorePerCourse[i];
    }

    courseTotal.innerText = csTotal;
    // console.log(scorePerCourse)

}





// divide the total course value form the total credit
const gpa = () => {
    const courseTotal = document.querySelector('#course-Total').innerText,
        unitsTotal = document.querySelector('#unit-Total').innerText,
        GPA = document.querySelector('#gpa')
    ;

    let gpa = courseTotal / unitsTotal;
    GPA.innerText = gpa

    // console.log(gpa)
}




// display grade

const 
    blur = document.querySelector('.blur'),
    resultDisplay = document.querySelector('.result-display'),
    closeBtn = document.querySelector('#close')
;    


calculate.addEventListener('click', () => {

    if(document.querySelector('.course-dts') != null) {

        calculateGpa()
    
        let container =  document.querySelector('.container');
        container.style.overflow = 'hidden';
        container.style.height = '100vh';
        document.querySelector('body').style.height = '100vh';
     
        blur.style.display = 'block';
        resultDisplay.style.display = 'flex';
     
        closeBtn.addEventListener('click', () => {
            container.style.overflow = 'auto';
            container.style.height = 'auto';
            document.querySelector('body').style.height = 'auto';
            blur.style.display = 'none';
            resultDisplay.style.display = 'none';
        })
    } else {
        alert('please enter course details')
    }

    
})



// delete course
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

            resetlocalstorage()

        })

    }
})



// const resetlocalstorage = () => {

//    let removed =  courseSTore.filter(course => {
//         course.classList != 'deleted';
//     });

//     console.log(courseSTore)
//     console.log(removed)

// }