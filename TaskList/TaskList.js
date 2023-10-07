// varaibles
let MyTask = [];
let addButton = document.getElementById('add');

//functionality
// event listerner
addButton.addEventListener('click', () => {
    let task = document.querySelector('.inputs-task');
    if (task.value == ''){
        alert('Please enter a task');   
    }else {
        appendTaskInList(task.value);
        task.value = "";
        generateDisplayHTML();
    }
});
// functionality
// appendting the input in our list
function appendTaskInList(task){
    // make a object to identify if its already in check
    let objectTask = {
        taskName: task,
        isCheck: false
    };
    MyTask.push(objectTask);
};
// deleting the task in the list
function deleteTaskInList(index){
    // if the delete button is click just splice the our mylist
    MyTask.splice(index, 1);
    generateDisplayHTML();
};
// check or mark as done the list
function checkTaskInList(index){
    // if the check button is click just change the value of isCheck eqaul to true
    MyTask[index].isCheck = true;
    generateDisplayHTML();
};

// generate the display list
function generateDisplayHTML(){
    let containerHtml = document.querySelector('.container-task');
    let concatinate = "";
    MyTask.forEach((task, index) => {
        let temp = "";
        if (!task.isCheck){
            temp = `
            <div class="container-ouput-task">
                <p class="output-task">${task.taskName}</p>
                <div class=".buttons">
                    <button id="check" onclick="checkTaskInList(${index})"><img src="Image/Check.png" alt="Check"></button>
                    <button id="delete" onclick="deleteTaskInList(${index})"><img src="Image/Delete.png" alt="Delete"></button>
                </div>
            </div>
            `;
        } else {
            temp = `
            <div class="container-ouput-task">
                <p class="output-task" style="text-decoration: line-through;">${task.taskName}</p>
                <div class=".buttons">
                    <button id="check" onclick="checkTaskInList(${index})"><img src="Image/Check.png" alt="Check"></button>
                    <button id="delete" onclick="deleteTaskInList(${index})"><img src="Image/Delete.png" alt="Delete"></button>
                </div>
            </div>
            `;
        }
        concatinate += temp;
    });
    containerHtml.innerHTML = concatinate;
}