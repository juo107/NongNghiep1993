import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen font-sans text-gray-800">
            <Header />
            <main>
                <Hero />
                <About />
                <Branches />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
