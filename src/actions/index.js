import axios from 'axios';

//Action Type변수 정의
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = "ADD_TODO";

const apiUrl = 'http://localhost:4500/api/todos';

//Action 생성함수 정의

//1.Todo 목록 가져오기
export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)   //Promise
            .then(res => {
                dispatch({
                    type: FETCH_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw error;
            });
    }
};
//2. Todo 등록
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiUrl, todo)
            .then(res => {
                dispatch({
                    type: ADD_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
};
