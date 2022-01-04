import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';
class App extends Component {
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