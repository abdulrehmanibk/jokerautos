import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './Screens/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import React from 'react';
import Register from './Screens/Register/Register';
import Teacher from './Screens/Teacher/Teacher';
import About from './Screens/About/About';
import Pricing from './Screens/Pricing/Pricing';
import ScrollToTop from './Components/TopScroll';
import { NavIconProvider } from './Context/NavIcon';
import AdditionalLinks from './Screens/AdditionalLinks/AdditionalLinks';
import Services from './Screens/Services/Services';
import ServicesCategotries from './Screens/Services/ServicesCategotries';

function App() {
  return (
    <>
    <NavIconProvider>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServicesCategotries />} />
        <Route path="service/:id" element={<Services />} />
        <Route path="/teachers/:id" element={<Teacher />} />
        <Route path="/additionallinks/:id" element={<AdditionalLinks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about/jokerautos" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </NavIconProvider>
    </>
  )
}

export default App;
