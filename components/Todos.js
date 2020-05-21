import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map ((todo) => (
      <TodoItem 
        key={this.props.todos.id} 
        todo={ todo } 
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes =  {
  todos : PropTypes.array.isRequired
}

export default Todos;
