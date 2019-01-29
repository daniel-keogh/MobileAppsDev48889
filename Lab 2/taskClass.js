"use strict";
exports.__esModule = true;
var taskClass = /** @class */ (function () {
    function taskClass() {
        this.tasks = [];
    }
    taskClass.prototype.addTask = function (task) {
        var numElements = this.tasks.push(task);
        console.log(task + " was added to the list of tasks.");
        return numElements;
    };
    taskClass.prototype.allTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    taskClass.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log(task + " was removed from tasks.");
        return this.tasks.length;
    };
    return taskClass;
}());
var myTasks = new taskClass();
console.log("Number of items: ", myTasks.addTask("Task One"));
console.log("Number of items: ", myTasks.addTask("Task Two"));
console.log("All tasks before deletion:");
myTasks.allTasks();
myTasks.deleteTask("Task Two");
console.log("All tasks after deletion:");
myTasks.allTasks();
