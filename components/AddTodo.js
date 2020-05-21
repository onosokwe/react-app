import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name] : e.target.value
    }); 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});
    }

    render() {

        return (
            <form onSubmit={this.onSubmit} style={myForm}>
                <input 
                    type="text"
                    placeholder="Add Todo..." 
                    name="title" 
                    style={formInput}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="SUBMIT" 
                    style={btn2Style} 
                    // onClick={}
                />
            </form>
        )
    }
}
const myForm = {
    display: 'block',
    backgroundColor: '#444',
    marginBottom: '20px',
}

const formInput = {
    width: 'calc(100% - 90px)',
    flex: '10',
    padding: '10px 20px',
    border: '1px solid #444'
}

const btn2Style = {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    width: '90px',
    padding: '10px 20px',
    borderRadius: 0,
    cursor: 'pointer',
    float: 'right',
}

export default AddTodo;
