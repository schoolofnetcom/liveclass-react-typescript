import React, { useState } from 'react';

interface Props {
    addTodo: AddNewTodo
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState<string>('');

    const onClickToAdd = () => {
        addTodo(text);
    };

    return (
        <form>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button type="button" onClick={onClickToAdd}>Add new todo</button>
        </form>
    );
};
