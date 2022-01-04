import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
class App extends Component {
  render() {
    return (
      <div>
          <TodoListTemplate form={<div>Form</div>}>
            <div>TodoList</div>
          </TodoListTemplate>
      </div>
    );
  }
}

export default App;