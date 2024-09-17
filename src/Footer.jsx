export default function Footer() {
    
    return (
        <div className='card-footer text-center'>
            &copy; { new Date().getFullYear() }&nbsp; 
            <a href='https://github.com/Vinchands' className='text-decoration-none' target='_blank' rel='noopener noreferrer'>
                Vinchands
            </a>
            &nbsp;
            <i className='bi bi-github'></i>
        </div>
    )
}
