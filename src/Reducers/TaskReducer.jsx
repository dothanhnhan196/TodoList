import listOfTask from "../Model/getData.jsx";

let jsonTask = JSON.parse(localStorage.getItem("task"));
let taskState = jsonTask ? jsonTask : [];

export const TaskReducer = (state = taskState, action) => {
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
    case "UPDATE_TASK": {
      for (let index in jsonTask) {
        if (jsonTask[index].id === action.index.id) {
          jsonTask[index] = action.index;
          localStorage.setItem("task", JSON.stringify(jsonTask));
          state = jsonTask;
          return state;
        }
      }
      return state;
    }
    case "CHANGE_STATUS": {
      for (let index in jsonTask) {
        if (jsonTask[index].id === action.id) {
          jsonTask[index].status = action.status;
          localStorage.setItem("task", JSON.stringify(jsonTask));
          state = jsonTask;
          return state;
        }
      }
      return state;
    }

    default:
      return state;
  }
};
