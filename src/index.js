import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import Footer from './components/Footer';
function All(){
    return(
        <div>
        <Header />
        <Main />
        <Footer />
        </div>
        
    )
}
ReactDOM.render(<All />,document.getElementById('root'));

