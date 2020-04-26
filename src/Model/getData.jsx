import Task from "./Task.jsx";
import ListOfTask from "./ListOfTask.jsx";
import TaskData from "./TaskData.jsx";

let listOfTask = new ListOfTask();

for (let task of TaskData) {
  let id = task.id;
  let name = task.name;
  let labelArr = task.labelArr;
  let priority = task.priority;
  let memberIDArr = task.memberIDArr;
  let status = task.status;
  let description = task.description;

  let newTask = new Task(
    id,
    name,
    labelArr,
    status,
    description,
    priority,
    memberIDArr
  );

  listOfTask.addTask(newTask);
}

export default listOfTask;
