import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    /*
        shouldComponentUpdate() 메서드가 
        true를 반환하면 render() 호출이 되고,
        false를 반환하면 render() 호출이 되지 않는다
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, myToggle, myRemove } = this.props;
        const todo_list = todos.map(({ id, text, checked }) =>
        (<TodoItem key={id} id={id} text={text} checked={checked}
            myToggle={myToggle} myRemove={myRemove} />));

        return (
            <div>
                {todo_list}
            </div>
        );
    }
}

export default TodoItemList;