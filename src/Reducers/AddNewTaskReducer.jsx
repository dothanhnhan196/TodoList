let addNewTaskState = true;
export const AddNewTaskReducer = (state = addNewTaskState, action) => {
  switch (action.type) {
    case "CONVERT_ADD_NEW_TASK": {
      state = true;
      return state;
    }
    case "CONVERT_EDIT_TASK": {
      state = false;
      return state;
    }
    default:
      return state;
  }
};
