import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#454545',
            maxWidth: '550px',
            padding : '10px',
            color: '#fff',
            margin: 'auto',
            borderBottom: '1px solid #fff',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)} 
                    /> {' '}
                    <span>{title}</span>
                    <button 
                        onClick={this.props.delTodo.bind(this, id)} 
                        style={btnStyle}> x 
                    </button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes =  {
    todo : PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#454545',
//     color: '#fff', 
//     padding: '10px',
//     borderBottom: '1px solid #fff'
// }

const btnStyle = {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
