import React from "react";
import { TodoItem } from './TodoItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleDone;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};