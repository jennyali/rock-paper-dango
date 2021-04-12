import React from 'react';
import Data from '../Data';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img 
                className="header-img"
                src={Data.title} 
                alt="Rock, Paper, Dango!" 
            />
        </header>
    )
};

export default Header;