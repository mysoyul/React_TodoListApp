import React, { Component } from 'react';
import './TodoItem.css';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';
class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    handleRemove = (id) => {
        //Action 생성함수 (Todo 삭제) 호출
        this.props.deleteTodo(id);
    }
    
    render() {
        const { text, checked, id, myToggle } = this.props;
        const { handleRemove } = this;

        return (
            <div className="todo-item" onClick={() => myToggle(id)}>
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
export default connect(null, {deleteTodo:removeTodo})(TodoItem);