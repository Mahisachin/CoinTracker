import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { Signup } from './components/Signup';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Signup/>
      <Footer/>
    </>
  );
}

export default App;
