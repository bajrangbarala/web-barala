// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Home from './Components/PageComponents/Home';
import Coursess from './Components/PageComponents/Coursess';
import Teachers from './Components/PageComponents/Teachers';
import Contacts from './Components/PageComponents/Contacts';
import Abouts from './Components/PageComponents/Abouts';
import Page404 from './Components/Page404/Page404';




function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "E-Learning-Website-design";
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Coursess' element={<Coursess/>} />
          <Route path='/Teachers' element={<Teachers />}/>
          <Route path='/Contact' element={<Contacts/>}/>
          <Route path='/About' element={<Abouts/>}/>
          <Route path='/*' element={<Page404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  );
}

export default App;
