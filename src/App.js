
import {BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";


import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/contact.scss";


import "./styles/mediaquery.scss";


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
