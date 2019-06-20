$(document).ready( onReady );

function onReady(){
    $(`#add-task`).on('click', addTaskHandler);
    $(`#task-list`).on('click', '.delete', deleteTask);
    $(`#task-list`).on('click', '.flag', flagText);
    $(`#clear-tasks`).on('click', deleteAllTasks);
}

function addTaskHandler(event){
    // Default action when you submit a form (we clicked a button of type submit) is for page to refresh
    // The line below will prevent the page refresh
    event.preventDefault();
    console.log('Event', event)
    const taskName = $(`#task-name`).val();
    console.log( 'Clicked Add Task! Task is ', taskName );

    // Add the task
    renderTask(taskName);

    // Clear out the form field so we can enter new stuff
    $(`#task-name`).val('');
}

function renderTask(task){
    $(`#task-list`).append(
    `<li>
        ${task}
        <button class="delete">Delete</button>
        <button class="flag">Flag</button>
    </li>`);
}

function deleteTask(event){
    console.log( 'clicked delete', $(this).parent().text());
    // 'this' is the delete button. We want to delete its parent element, the <li>
    $(this).parent().remove();
}

function flagText(event){
    console.log( 'clicked flag', $(this).parent().text() );

    // We made a style class in the css named ".important"
    // We want to select the <li> which is the parent of 'this' or the thing we clicked on
    $(this).parent().toggleClass('important');
    // $(this).parent().addClass('important');

}

// This will remove all tasks from the list when we click the "renove all" button
function deleteAllTasks(event){
    $(`#task-list`).empty();
}