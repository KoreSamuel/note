import React, { PropTypes, Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => 
                    <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}

TodoList.prototypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};
