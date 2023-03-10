import React from 'react';

import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Menu from './Components/Layout/Menu/Menu';
import Main from './Components/Layout/Main/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <Menu />
            <Main/>
            <Footer />
        </div>
    );
}

export default App;
