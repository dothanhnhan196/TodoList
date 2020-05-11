let taskEditingState = {
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
      state = action.item;
      return state;
    }
    case "CLEAR_FORM": {
      state = {
        id: "",
        name: "",
        description: "",
        priority: "",
        memberIDArr: "",
        labelArr: "",
        status: "",
      };
      return state;
    }

    default:
      return state;
  }
};
