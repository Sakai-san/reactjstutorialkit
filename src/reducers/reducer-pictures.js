/**
 * @flow
 * reducer : change a specific part of the store (here the pictures part)
 */
export default (state: Array<Object> = [], action: Object): Object => {
  if (action.type === 'INITIALIZATION') {
    return action.payload;
  } else if (action.type === 'ADD_PICTURE') {
    return [action.payload, ...state]; // must be a pure function
  } else if (action.type === 'REMOVE_PICTURE') {
    return state.filter((pic: Object): boolean => action.payload !== pic.id); // must be a pure function
  }
  return state;
};
