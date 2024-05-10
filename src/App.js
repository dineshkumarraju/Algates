import React from 'react';
import'./app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Aligates from './components/Aligates/Aligates'
import Componentos from './components/Componentos/Componentos'
import Main from './components/Main/Main'
import Customer from './components/Customers/Customers'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
  <Navbar />
  <Home />
<Aligates/>
<Componentos/>
<Main/>
<Customer/>
<Footer/>
  </>
  );
}

export default App;
