import * as types from '../actions/actionTypes';

export default function courseReduces( state = [], action){
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.course;
    default:
      return state;
  }
}
