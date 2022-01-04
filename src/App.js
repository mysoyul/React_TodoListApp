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
    todo: '',
    todos: initialTodos
    // todos: [
    //   { id: 0, text: '리액트 소개', checked: false },
    //   { id: 1, text: '리액트 구조', checked: true },
    //   { id: 2, text: '리액트 사용', checked: false }
    // ]
  }
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

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    });
  };

  render() {
    const { todo, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleRemove, handleToggle } = this;

    return (
      <div>
        <TodoListTemplate form={<Form todo={todo}
          myChange={handleChange}
          myCreate={handleCreate}
          myKeyPress={handleKeyPress} />}>
          <TodoItemList todos={todos} myRemove={handleRemove} myToggle={handleToggle} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;