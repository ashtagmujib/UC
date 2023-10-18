// input constants
const inputTab = document.querySelector('.input'),
   courseName = document.querySelector('#course-name'),
   courseUnit = document.querySelector('#course-unit'),
   courseGrade = document.querySelector('#course-grade'),
   addCourse = document.querySelector('#add-course'),

   output = document.querySelector('.output'),
   outputControl = document.querySelector('.output-control'),
   calculate = document.querySelector('#calculate')
;   
   


inputTab.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();

    if(isValid) {
       createOutput();
    } else {
        console.log('input value is empty')
    }

})



//from validation

const validateForm = () => {
    let course = courseName.value,
        grade = courseGrade.value,
        unit = courseUnit.value
    ;   
    
    
    if(course === '') {
        alert('please enter field');
        isValid = false;
    } else {
        isValid = true;
    }


    if(grade === '') {
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
    let courseOutput = document.createElement('div');
    let unitOutput = document.createElement('div');
    let gradeOutput = document.createElement('div');
     
    
    // add classname to elements
    courseDts.className = 'course-dts'
    courseOutput.className = 'course-output';
    unitOutput.className = 'unit-output';
    gradeOutput.className = 'grade-output';

    // get text value from input and add to output
    courseOutput.innerText = courseName.value;
    unitOutput.innerText = courseUnit.value;
    gradeOutput.innerText = courseGrade.value;


    // append to parent
    courseDts.appendChild(courseOutput);
    courseDts.appendChild(unitOutput);
    courseDts.appendChild(gradeOutput);

    outputControl.appendChild(courseDts);

    calculateUnits();

}


const calculateUnits = () => {
    let courseDts = document.querySelectorAll('.course-dts');

    courseDts.forEach(output => {
        unitOutput = document.querySelector('.unit-output').innerText

        console.log(unitOutput)
        console.log(output)
    })
}






































// calculate gpa   


// const calculateUnits = () => {

//     let courseDts = document.querySelectorAll('.course-dts'),
//         units = [],
//         unitSum = 0
//     ;


//     courseDts.forEach(output => {
//         units.push(document.querySelector('.unit-output').innerText);

//         // convert the array of strings to numbers
//         let unitNum = units.map(toNumbers);
//         function toNumbers(value) {
//             return +value;
//         }

//         // sum up the numbers in the unit array
//         for(let i = 0; i < unitNum.length; i++) {
//             unitSum += unitNum[i] 
//         }

//         console.log(unitNum)
//     });
    


    
//     console.log(unitSum)
//     console.log(units)

    
// }
