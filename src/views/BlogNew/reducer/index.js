import * as constants from '../constants';
 const initialState = {
  foodName: '',
  files: [],
  editorHtml: ''
}
 const blogNewReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ON_DROP_FILES:
      return {
        foodName: state.foodName,
        editorHtml: state.editorHtml,
        files: action.files
      }
     case constants.HANDLE_CHANGE_FOOD_NAME:
      return {
        foodName: action.foodName,
        editorHtml: state.editorHtml,
        files: state.files
      }
    case constants.HANDLE_EDITOR_CHANGE:
      return {
        foodName: state.foodName,
        editorHtml: action.text,
        files: state.files
      }
    case constants.SUBMIT_DATA:
      console.log(state)

      return {
        foodName: state.foodName,
        editorHtml: state.editorHtml,
        files: state.files
      }
    default:
      return state
  }
}
 export default blogNewReducer;