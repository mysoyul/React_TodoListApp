import axios from 'axios';

//Action Type변수 정의
export const FETCH_TODOS = 'FETCH_TODOS';

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