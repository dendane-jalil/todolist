// variables declaration 
const inputBox = document.getElementById("input-Box");
const todoContainer = document.getElementById("todolist-cont");

// addtask function takes the input from inputBox 
// and check if it is empty or have invlid charecters( should add a RegExp in the future) 
// if not it will create an element li and give the value of inputBox ,once created it will be appended to the todo list container
// and we should create a cross sign to, for deleting the li . 
function addTask() {
    if (inputBox.value === "") {
        alert("non valid input");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoContainer.appendChild(li);
        // each 'li' created will have its own deleting cross
        let cross = document.createElement("span");
        cross.innerHTML = " \u00d7";
        li.appendChild(cross);
    }
    // after the task have been added we should reinitilize the inputBox (reset to empty)
    inputBox.value = "";
    saveData();
}
// what the deleter does is it check if the targeted element is
// the task or the cross , if it is the cross the task will be removed 
// if it is the li (task) it will activate check or uncheck css class(toggle between the two states)

function taskDeleter() {
    todoContainer.addEventListener('click', (e) => {
        let clickedElem = e.target.tagname;
        if (clickedElem === "LI") {
            clickedElem.classlist.toggle('checked');
        }// this will add or remove the
        //  checked class from the class list hence creating the straight line effect

        else if (clickedElem === "SPAN") {
            clickedElem.parentElement.remove();
        }
    }, false);
    saveData();
}
// this function wil be used each time we change the state of our app (every time we add a new item ,delete or update it)
function saveData() {
    localStorage.setItem('data', todoContainer.innerHTML);
}

// since we have stored the todolist in localstorage we can access it's content even when 
// the page is refreshed 

function showTasks() {
    todoContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
// while (1) {
//
// }