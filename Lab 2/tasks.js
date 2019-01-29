// In this exercise you are required to create an array, and then create functions to add,
// remove and display the items in this array.
var tasks = ["g0", "g0", "g0", "g0", "g0"];
function addTask(task) {
    var numElements = tasks.push(task);
    console.log(task + " was added to the list of tasks.");
    return numElements;
}
function allTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(task + " was removed from tasks.");
    }
    return tasks.length;
}
allTasks();
deleteTask("g0");
allTasks();
