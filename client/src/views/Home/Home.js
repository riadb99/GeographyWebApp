import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import Signup from '../../components/Authentication/Signup';

function Home() {
    return (
        <div>
            {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>*/}
            <Signup />
        </div>
    );
}

export default Home;
