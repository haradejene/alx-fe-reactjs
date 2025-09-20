import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter"

function App() {
  

  return (
    <>
      <Header />
       <MainContent />
        <div>
      <h1>Welcome to the User Profile App</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Software engineer who enjoys gaming" />
    </div>
      <WelcomeMessage />
      <Counter />
       <Footer />
    </>
  )
}

export default App
