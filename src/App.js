import React from 'react'
import Routes from './Routes';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

 function App() {
  return (
    <div>
      <Header/>
      <Menu/>
    <Routes/>
      
      <Footer/>
    </div>
  )
}
export default App;
