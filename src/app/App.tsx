import React from 'react';

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import MainContent from "./components/mainContent/MainContent";
import Footer from './components/footer/Footer';

import '../styles/main.css';

function App() {
    return (
        <div>
            <Header />
            <Banner />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;