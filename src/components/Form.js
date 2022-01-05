import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    //상태변수 정의
    state = {
        todo: ''
    };
    //Event Handler 메서드선언
    handleChange = (e) => {
        this.setState({
            todo: e.target.value // todo 의 다음 바뀔 값
        });
    }
    handleCreate = () => {
        const { todo, todos } = this.state;
        const todoObj = {
            id: this.id++,
            text: todo,
            checked: false
        };

        this.setState({
            todo: '', // todo 초기화
            // ...(spread operator)을 사용하여 todo객체를 배열에 추가
            todos: [...todos, todoObj]
        });
    }
    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 이면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    render() {
        const { todo } = this.state;
        const { handleChange, handleCreate, handleKeyPress } = this;
        return (
            <div className='form'>
                <input value={todo} onChange={handleChange}
                    onKeyPress={handleKeyPress} />
                <div className="create-button" onClick={handleCreate}>
                    추가
                </div>
            </div>
        );
    }
}

export default Form;