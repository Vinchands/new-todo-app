import TodoForm from './TodoForm'
import SearchBar from './SearchBar'
import TodoList from './TodoList'
import { Todo, TodoActions } from './TodoComponents'
import { useState } from 'react'

export default function TodoApp() {
    
    const [todos, setTodos] = useState([])
    const [todoId, setTodoId] = useState(0)
    const [searchText, setSearchText] = useState('')
    
    function handleTodoAdd(todoTitle) {
        const updatedTodos = [...todos, {
            id: todoId,
            title: todoTitle,
            completed: false,
        }]
        
        setTodos(updatedTodos)
        setTodoId(todoId + 1)
    }
    
    function handleTodoCheck(todoId) {
        const updatedTodos = todos.map(todo => todo.id === todoId? {...todo, completed: !todo.completed} : todo)
        
        setTodos(updatedTodos)
    }
    
    // function handleTodoEdit(todoId) {
        
    // }
    
    function handleTodoDelete(todoId) {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        
        setTodos(updatedTodos)
    }
    
    const todoList = todos.map(todo => (
        todo.title.toLowerCase().includes(searchText.toLowerCase()) &&
        <Todo key={ todo.id } todo={ todo } onTodoCheck={ () => handleTodoCheck(todo.id) }>
            <TodoActions todoId={ todo.id } onTodoEdit={ () => undefined } onTodoDelete={ () => handleTodoDelete(todo.id) } />
        </Todo>
    ))
    
    const children = todos.length === 0 
        ? <h5 className="fw-semibold text-center text-secondary">You have nothing to do yet.</h5> 
        : (
            searchText && todoList.length === 0
            ? <h5 className="fw-semibold text-center text-secondary">No result.</h5> 
            : todoList
        )
    
    return (
        <div className='card-body'>
            <TodoForm onTodoAdd={ handleTodoAdd } />
            <hr />
            <SearchBar onSearch={ setSearchText } />
            <TodoList>{ children }</TodoList>
        </div>
    )
}
