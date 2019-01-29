// Implement the same functionality as exercise 2 using an
// interface instead. A class will be required to implement the interface.
import { taskInterface } from "./taskInterface";

class taskClass implements taskInterface
{
    tasks : string[] = [];

    constructor() {}

    addTask(task : string)
    {
        let numElements : number = this.tasks.push(task);
        console.log(task + " was added to the list of tasks.");
        
        return numElements;
    }

    allTasks() 
    {
        this.tasks.forEach(function(task)
        {
            console.log(task)
        });
    }

    deleteTask(task : string)
    {   
        let index : number = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);

        console.log(task +" was removed from tasks.");
        return this.tasks.length;
    }
}

let myTasks = new taskClass();
console.log("Number of items: ", myTasks.addTask("Task One"));
console.log("Number of items: ", myTasks.addTask("Task Two"));
console.log("All tasks before deletion:");
myTasks.allTasks();
myTasks.deleteTask("Task Two");
console.log("All tasks after deletion:");
myTasks.allTasks();