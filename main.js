// input constants
const input = document.querySelector('.input'),
   courseName = document.querySelector('#course-name'),
   courseUnit = document.querySelector('#course-unit'),
   courseGrade = document.querySelector('#course-grade'),
   addCourse = document.querySelector('#add-course'),

   output = document.querySelector('.output'),
   outputControl = document.querySelector('.output-control')
;   
   



input.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();

    if(isValid = true) {
       createOutput();
    }

})



//from validation

const validateForm = () => {
    let course = courseName.value.trim(),
        grade = courseGrade.value.trim(),
        unit = courseUnit.value.trim()
    ;   
    
    
    if(courseName.value === '') {
        alert('please enter field');
        isValid = false;
    } else {
        console.log(course);
        isValid = true;
    }


    if(courseUnit.value === '') {
        alert('please enter field');
        isValid = false;
    } else {
        console.log(unit);
        isValid = true;
    }


    if(courseGrade.value === '') {
        alert('please enter field');
        isValid = false;
    } else {
        console.log(grade);
        isValid = false;
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
    unitOutput.innerText = courseGrade.value;
    gradeOutput.innerText = courseUnit.value;


    // append to parent
    courseDts.appendChild(courseOutput);
    courseDts.appendChild(unitOutput);
    courseDts.appendChild(gradeOutput);

    outputControl.appendChild(courseDts);

}