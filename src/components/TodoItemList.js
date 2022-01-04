import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoItemList extends Component {
    render() {
        const {todos, myToggle, myRemove} = this.props;

        return (
            <div>
                <TodoItem text="todo1" checked={false} />
                <TodoItem text="todo2" checked={true} />
                <TodoItem text="todo3" checked={false} />
            </div>
        );
    }
}

export default TodoItemList;