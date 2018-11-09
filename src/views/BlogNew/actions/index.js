import * as constants from '../constants';

export const onDropFiles = (files) => {
  return dispatch => {
    dispatch({
      type: constants.ON_DROP_FILES,
      files
    });
  }
}

export const handleChangeFoodName = (foodName) => {
  return dispatch => {
    dispatch({
      type: constants.HANDLE_CHANGE_FOOD_NAME,
      foodName
    });
  }
}

export const handleEditorChange = (text) => {
  return dispatch => {
    dispatch({
      type: constants.HANDLE_EDITOR_CHANGE,
      text
    });
  }
}

export const onSubmit = (data) => {
  return dispatch => {
    dispatch({
      type: constants.SUBMIT_DATA,
      data
    });
  }
}