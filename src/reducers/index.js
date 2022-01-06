import * as types from '../actions';

//state 객체 초기화
const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
};

//Reducer 함수 정의
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REMOVE_TODO:
        case types.ADD_TODO:
        case types.FETCH_TODOS:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}