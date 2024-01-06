import React from 'react';
import { Navber } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navber />
        <Header />
        <About />
        <Skills />
        <Testimonial />
        <Work />
        <Footer />
    </div>
  )
}

export default App