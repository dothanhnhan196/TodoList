const taskEditingState = {
  id: "",
  name: "",
  description: "",
  priority: "",
  memberIDArr: "",
  labelArr: "",
  status: "",
};

export const TaskEditingReducer = (state = taskEditingState, action) => {
  switch (action.type) {
    case "EDIT_TASK": {
      console.log(action);
      state = action.taskEditing;
      return state;
    }

    default:
      return state;
  }
};
