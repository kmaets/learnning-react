import React from 'react';

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import MainContent from "./components/mainContent/MainContent";
import ToDoList from "./components/toDo/ToDoList";
import Footer from './components/footer/Footer';

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