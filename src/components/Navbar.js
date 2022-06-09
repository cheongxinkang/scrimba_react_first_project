import reactLogo from '../images/reactjs-icon.png'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={reactLogo} alt="Logo" className='nav--icon' />
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h1 className='nav--title'>React Course - Project 1</h1>
        </nav>
    )
}