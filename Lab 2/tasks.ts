// In this exercise you are required to create an array, and then create functions to add,
// remove and display the items in this array.

let tasks : string[] = [];

function addTask(task : string) : number
{
    let numElements : number = tasks.push(task);
    console.log(task + " was added to the list of tasks.");
    
    return numElements;
}

function allTasks() : void 
{
    tasks.forEach(function(task)
    {
        console.log(task)
    });
}

function deleteTask(task : string) : number
{   
    let index : number = tasks.indexOf(task);
    tasks.splice(index, 1);

    console.log(task +" was removed from tasks.");
    return tasks.length;
}