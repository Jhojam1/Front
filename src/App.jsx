// App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Steps from './components/Steps';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Intro />
            <Steps />
            <Footer />
        </div>
    );
}

export default App;
