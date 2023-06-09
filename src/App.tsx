import { useState } from 'react';
import Header from './Components/Header.tsx';
import Introduction from './Components/Introduction.tsx';
import Articles from './Components/Articles.tsx';
import Why from './Components/Benefits.tsx';
import Footer from './Components/Footer.tsx'
import  "./sass/style.scss";

function App() {

  return (
    <div className='Container'>
      <Header />
      <Introduction />
      <Why />
      <Articles />
      <Footer />
    </div>
  )
}

export default App
