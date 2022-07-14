import './App.css';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
import User from './components/User';
import Page404 from './components/Page404';
// import Homecontainer from './Container/Homecontainer';


const App = () => {
  return (
    <>
   
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/User/:name' element={<User/>}/>
      <Route path='/*' element={<Page404/>}/>
    </Routes>
  

  </BrowserRouter>

    </>
  )
};

export default App;
 