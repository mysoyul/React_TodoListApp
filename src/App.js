import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

const initialTodos = new Array(500).fill(0).map(
  (item, idx) => ({ id: idx, text: `일정 ${idx}`, checked: true })
);

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  //상태변수를 가진 state 객체선언
  state = {
    
    todos: initialTodos
    // todos: [
    //   { id: 0, text: '리액트 소개', checked: false },
    //   { id: 1, text: '리액트 구조', checked: true },
    //   { id: 2, text: '리액트 사용', checked: false }
    // ]
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    });
  };

  render() {
    const { handleToggle } = this;

    return (
      <div>
        <TodoListTemplate form={<Form />}>
          <TodoItemList myToggle={handleToggle} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;