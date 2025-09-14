import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Header />
       <MainContent />
        <Footer />
      <WelcomeMessage />
    </>
  )
}

export default App
