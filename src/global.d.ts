interface Todo {
    text: string,
    done: boolean 
}
type AddNewTodo = (text: string) => void;
type ToggleDone = (selectedTodo: Todo ) => void;