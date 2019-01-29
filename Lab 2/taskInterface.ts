export interface taskInterface
{
    tasks : string[];
    addTask(task : string) : number;
    allTasks() : void;
    deleteTask(task : string) : number;
}