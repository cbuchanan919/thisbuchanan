import './Nav.css'
import logo from '/logo.svg'

function Nav() {
    return (
        <nav>
            <div className='nav--bar'>
                <div className='nav--contents'>
                    <a href='/' className='nav--title'>
                        <img src={logo} className='nav--logo' id='img' alt="This Buchanan logo"></img>
                        <h2><span className='line'>This</span>Buchanan<span className='line hidden'>.com</span></h2>
                    </a>
                    
                    <ul className='nav--links'>
                        <li><a href='home'>Home</a></li>
                        <li><a href='products'>Products</a></li>
                        <li><a href='about'>About</a></li>
                        <li><a href='blog'>Blog</a></li>
                        
                    </ul>
                </div>
            </div>
            <div className='nav--padding'></div>
        </nav>
       
        
    )
}
export default Nav
