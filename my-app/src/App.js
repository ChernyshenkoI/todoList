
import React, { Component } from 'react'
import ToDoList from './components/ToDoList';
import Form from './components/Form';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Вивчити Реакт', completed: false },
      { id: 'id-2', text: 'Вивчити JS', completed: true },
      { id: 'id-3', text: 'Вивчити Node', completed: false },
      { id: 'id-4', text: 'Вивчити TypeScript', completed: false },
    ],
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  formSubmitHandler = data => {
setTimeout(()=> {},1000)
  }

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0)

    return (
      <>
        <div>
          <Form onSubmit={this.formSubmitHandler} />
          <p>
            Загальна кількість: {totalTodoCount}
          </p>
          <p>
            Кількість виконаних: {completedTodosCount}
          </p>
        </div>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>

    );
  }
}




export default App;
