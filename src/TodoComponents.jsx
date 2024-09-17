/* eslint-disable react/prop-types */

export function Todo({ children, todo, onTodoCheck }) {
    
    return (
        <div className='card-solid bg-info-subtle rounded-5 shadow-sm mb-3 ps-1 p-2'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-2 ps-2'>
                    <input type='checkbox' className='flex-shrink-0 form-check-input my-auto' onChange={ onTodoCheck } checked={ todo.completed } />
                    <span className={ !todo.completed? 'fw-semibold' : 'fst-italic text-decoration-line-through' }>
                        { todo.title }
                    </span>
                </div>
                { children }
            </div>
        </div>
    )
}

export function TodoActions({ todoId, onTodoEdit, onTodoDelete }) {
    
    return (
        <div className='flex-shrink-0 dropdown'>
            <button className='btn btn-sm btn-info rounded-circle' data-bs-toggle='dropdown'>
                <i className='bi bi-chevron-down'></i>
            </button>
            <div className='dropdown-menu'>
                <div className='d-flex justify-content-center align-items-center px-1'>
                    <span className='flex-grow-1 fw-semibold'>Actions</span>
                    <div className='d-flex gap-1'>
                        <button className='btn btn-sm btn-warning' onClick={ () => onTodoEdit(todoId) } title='Edit' >
                            <i className='bi bi-pencil-square'></i>
                        </button>
                        <button className='btn btn-sm btn-danger' onClick={ () => onTodoDelete(todoId) } title='Delete' >
                            <i className='bi bi-trash-fill'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
