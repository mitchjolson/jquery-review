console.log('Good morning!');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady);

// appends the student as a list item to the #students element 
function renderStudent() {
    $(`#students`).append(`<li class="student">${student}</li>`)
}

// Loops through the entered list, calls the renderStudent function for each item in the list
function renderStudentList(studentList){
    for( student of studentList ){
        renderStudent(student);
    }
}

// This function will be called when we click on a student
// It will show an alert stating that the student is awesome
function showAwesomeAlert(event){
 //   console.log('Event:',event);
  //  console.log(this);
  let studentName = $(this).text();  
  alert(`${studentName} is awesome`)
}

// When DOM is ready, calls the renderStudentList function
// Need to select something already on the DOM
// Can filter the event to something new (dynamically generated)
// Do this with the 2nd arg to 'on' function ( '.student' )
function onReady(){
    renderStudentList(playfair);
    $( '#students' ).on( 'click', '.student', showAwesomeAlert );
}