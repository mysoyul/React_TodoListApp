import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

const App = () => {
  return (
    <div>
      <TodoListTemplate form={<Form />}>
          <TodoItemList />
        </TodoListTemplate>
    </div>
  );
};

export default App;