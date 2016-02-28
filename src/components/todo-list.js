import React from 'react';
import TodoItem from './todo-item';

export default React.createClass({
    render : function() {
      var todos = this.props.todos.map((todo, index) => {
        
        var onClick = () => {
          this.props.onTodoClick(index);
        };
        
        return(
          <TodoItem 
            task={todo.task} 
            done={todo.done}
            key={index} 
            onClick={onClick}
          />
        );
      });
      
      return(
        <div>
          {todos}
        </div>
      );
    },
});