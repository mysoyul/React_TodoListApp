import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';
class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  //상태변수를 가진 state 객체선언
  state = {
    todo: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 구조', checked: true },
      { id: 2, text: '리액트 사용', checked: false }
    ]
  }
  //Event Handler 메서드선언
  

  render() {
    return (
      <div>
        <TodoListTemplate form={<Form />}>
          <TodoItemList />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;