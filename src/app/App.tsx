import React from 'react';

import Header from "./components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import ToDoList from "./components/ToDoList";
import Footer from './components/Footer';

import '../styles/main.css';

function App() {
    return (
        <div>
            <Header />
            <Banner />
            <MainContent />
            <ToDoList />
            <Footer />
        </div>
    )
}

export default App;