import listOfTask from "../Model/getData.jsx";

let jsonTask = JSON.parse(localStorage.getItem("task"));
let taskState = jsonTask ? jsonTask : [];

export let TaskReducer = (state = taskState, action) => {
  switch (action.type) {
    case "LIST_ALL": {
      return state;
    }
    case "INITIALlIZE_TASKS": {
      localStorage.setItem("task", JSON.stringify(listOfTask.list));
      window.location.reload();
      return state;
    }
    case "ADD_TASKS": {
      jsonTask = [...jsonTask, action.newTask];
      state = jsonTask;
      localStorage.setItem("task", JSON.stringify(jsonTask));
      return state;
    }
    default:
      return state;
  }
};
