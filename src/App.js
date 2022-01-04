import React, { Component } from 'react';
import Form from './components/Form';
import TodoListTemplate from './components/TodoListTemplate';
class App extends Component {
  render() {
    return (
      <div>
          <TodoListTemplate form={<Form />}>
            <div>TodoList</div>
          </TodoListTemplate>
      </div>
    );
  }
}

export default App;