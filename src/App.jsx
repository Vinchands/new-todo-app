import Header from './Header'
import TodoApp from './TodoApp'
import Footer from './Footer'

export default function App() {
    
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 p-3'>
            <div className='col-12 col-sm-10 col-md-8 card bg-body-tertiary rounded-4 shadow' style={{ maxWidth: '490px' }}>
                <Header />
                <TodoApp />
                <Footer />
            </div>
        </div>
    )
}
