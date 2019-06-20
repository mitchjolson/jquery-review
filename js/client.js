console.log('Good morning!');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady);

// appends the student as a list item to the #students element 
function renderStudent() {
    $(`#students`).append(`<li>${student}</li>`)
}

// Loops through the entered list, calls the renderStudent function for each item in the list
function renderStudentList(studentList){
    for( student of studentList ){
        renderStudent(student);
    }
}

// When DOM is ready, calls the renderStudentList function
function onReady(){
    renderStudentList(playfair);
}