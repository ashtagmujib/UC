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

let isValid = false;




inputTab.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();

    if(isValid === true) {
       createOutput();
       calculateGpa()
    } 

})



courseGrade.addEventListener('click', e => {
    courseGrade.classList.toggle('active');

    if(e.target.matches('#grade')) {
        gradeValue.innerText = e.target.innerText;
    }
})









//from validation
const validateForm = () => {
    let course = courseName.value.trim(),
        unit = courseUnit.value.trim()
    ;   
    
    
    if(course === '') {
        alert('please enter field');
        isValid = false;
    } else {
        isValid = true;
    }


    if(unit === '') {
        alert('please enter field');
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

}




//calculate gpa
const calculateGpa = () => {

    // const
    //     courseDts = document.querySelectorAll('.course-dts'), 
    //     courseOutput = document.querySelector('.course-output'),
    //     gradeOutput = document.querySelectorAll('.grade-output')
    // ;

    //sum up the units value
    calculatetotalUnit()

    // multiply grade and unit value
    gradeXunit()

}







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


    // to delete later

    // create element to display total unit in the dom
    let totalUnit = document.querySelector('#unit-Total');
    totalUnit.style.color = 'red';
    totalUnit.style.fontSize = '20px';

    totalUnit.innerText = unitSum;


    // console.log(unitsTotal)
    // console.log(unitNum)
    // console.log(unitSum)
}





const gradeXunit = () => {
    const courseDts = document.querySelectorAll('.course-dts'),
        grade = document.querySelectorAll('#grade'), 
        gradeOutput = document.querySelector('.grade-output')
    ;

    let scorePerCourse;



    courseDts.forEach(course => {
       let unitOutput = course.querySelector('.unit-output');
        let gradeOutput = course.querySelector('.grade-output');


        if(gradeOutput.innerText) {

            switch (gradeOutput.innerText) {
                case 'A':
                    let A = 5;
                break;  
                
                case 'B':
                    let B = 4;
                break;  
        
                case 'C':
                    let C = 3;
                break;  
        
                case 'D':
                    let D = 2;
                break;  
        
        
                case 'E':
                    let E = 1;
                break;  
        
                
                case 'F':
                    let F = 0;
                break; 
            }
            
        }

        console.log(unitOutput.innerText)
        console.log(gradeOutput.innerText)
    })


    //console.log(course)
    //console.log(courseOutput.innerText)

    // console.log(grade.innerText)


}





































