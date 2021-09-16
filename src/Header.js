import { useState } from 'react';
import {darkMode } from './sharedShit';

const Header = () => {
    const [dark,changeDark] = useState("dark")

    return ( 
        <header className='header'>
            <div className='container'>
            <h2>
                Where in the world?
            </h2>
            <span className='dark-mode '  id="toggle-dark" >
            <i className="fas fa-moon"> </i> Dark Mode
            </span>
            </div>
        </header>
     );
}
 
export default Header;