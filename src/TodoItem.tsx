interface Props {
    todo: Todo
    toggleTodo: ToggleDone
}

export const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label style={{ textDecoration: todo.done ? 'line-through' : undefined }}>
                <input type="checkbox" checked={todo.done} onClick={() => toggleTodo(todo)} />
                { ' ' } {todo.text}
            </label>
        </li>
    );
};