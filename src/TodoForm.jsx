/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function TodoForm({ onTodoAdd }) {
    
    const [todoTitle, setTodoTitle] = useState('')
    
    function handleTodoAdd() {
        onTodoAdd(todoTitle)
        setTodoTitle('')
    }
    
    return (
        <div className='d-flex gap-1'>
            <input type='text' 
                className='flex-grow-1 border-0 rounded-pill px-3 py-2' 
                placeholder='I want to do...' 
                value={ todoTitle }
                onChange={ e => setTodoTitle(e.target.value) }
                onKeyDown={
                    e => {
                        if (e.key === 'Enter' && todoTitle.trim()) handleTodoAdd()
                    }
                } />
            {
                todoTitle.trim() &&
                <button type='button' className='flex-shrink-0 btn btn-primary rounded-pill' onClick={ handleTodoAdd }>
                    <i className='bi bi-plus-lg'></i>
                    Add
                </button>
            }
        </div>
    )
}
