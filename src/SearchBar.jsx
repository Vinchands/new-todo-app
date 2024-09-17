/* eslint-disable react/prop-types */
export default function SearchBar({ onSearch }) {
    
    return (
        <div className='input-group'>
            <span className='input-group-text bg-white border-0 rounded-start-pill'>
                <i className='bi bi-search'></i>
            </span>
            <input type='text' className='flex-grow-1 border-0 rounded-end-pill py-2' placeholder='Search...' onChange={ e => onSearch(e.target.value) } />
        </div>
    )
}
