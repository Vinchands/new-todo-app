/* eslint-disable react/prop-types */

export default function TodoList({ children }) {
    
    return (
        <div className="overflow-auto py-3 mt-3" style={{ maxHeight: '400px' }}>
            { children }
        </div>
    )
}
