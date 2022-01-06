import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { fetchAllTodos } from '../actions';
class TodoItemList extends Component {
    /*
        shouldComponentUpdate() 메서드가 
        true를 반환하면 render() 호출이 되고,
        false를 반환하면 render() 호출이 되지 않는다
           현재 todos와 다음에 그려질 todos를 비교해서 같으면 렌더링을 생략할 수 있다.
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.all_todos !== nextProps.all_todos;
    }

    render() {
        const { all_todos } = this.props;
        const todo_list = all_todos.map(({ id, text, checked }) =>
        (<TodoItem key={id} id={id} text={text} checked={checked} />));

        return (
            <div>
                {todo_list}
            </div>
        );
    }
    //render() 뒤에 호출되는 Lifecycle method
    componentDidMount() {
        //props로 받은 Action 생성함수(todo 목록)를 호출
        this.props.fetchTodoList();
    }

}

export default connect(
    state => ({all_todos:state.todos}),
    {fetchTodoList:fetchAllTodos}
    )
(TodoItemList);