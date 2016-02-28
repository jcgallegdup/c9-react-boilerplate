import React from 'react';
import AppHeader from './app-header';
import TodoList from './todo-list';
import TodoInput from './todo-input'

export default React.createClass({
  
  createTodo : function(str,bool){
    return({
      task: str,
      done : bool,
    });
  },
  
  getInitialState: function(){
    return {
      todos: [
        this.createTodo("get coffee", false),
        this.createTodo("code in JS", false),
        this.createTodo("eat lunch", false),
      ]
    };
  },
  
  addTodo : function(task){
    var newTodo = this.createTodo(task, false);
    // equiv to "todos.append(newTodo)" but cleaner
    var todos = [ ...this.state.todos, newTodo ];
    this.setState({ todos: todos });
  },
  
  toggleTodo: function(index){
    var todos = this.state.todos;
    todos[index].done = !this.state.todos[index].done;
    
    this.setState({ todos: todos });
  },
  
  render: function () {
    return (
      <div>
        <AppHeader
          title="What to do.."
          tagline="..but oh well"
        />
        
        <TodoList
          onTodoClick={this.toggleTodo}
          todos={this.state.todos}
        />
        
        <TodoInput
          onSubmit={this.addTodo}
        />
      </div>
    );
  },
});
