import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import './App.css';
//import Data from '../Data';

const App = () => {
    return (
        <>
            <Header />
            <div className="page">
                <Game />
            </div>
            <Footer />
        </>
    )
};

export default App;