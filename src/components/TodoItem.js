import React, { Component } from 'react';
import './TodoItem.css';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';
class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    handleRemove = (id) => {
        //Action 생성함수 (Todo 삭제) 호출
        this.props.deleteTodo(id);
    };

    handleToggle = (todo) => {
        //Action 생성함수 (Todo 수정) 호출
        this.props.upateTodo(todo);
    };
    
    render() {
        const { text, checked, id } = this.props;
        const { handleRemove, handleToggle } = this;

        return (
            <div className="todo-item" onClick={() => {
                const todoObj = {id, text, checked};
                todoObj.checked = !todoObj.checked;
                handleToggle(todoObj);
            }}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // myToggle 이 실행되지 않도록 함
                    handleRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default connect(null, {deleteTodo:removeTodo, upateTodo:toggleTodo})(TodoItem);