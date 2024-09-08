
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import PulsarPage from "./pages/projects/pulsar/pulsar";
import PulsarFunctions from './pages/pulsarFunctions';
import React, { useState } from 'react';
import About from './pages/projects/pulsar/about';
import HomePage from './pages/home';
import Talk from './pages/Talk';
import MainAbout from './pages/MainAbout';
import  projects from './pages/projects/projects';
import classify from './pages/projects/pulsar/classify';
import discuss from './pages/projects/pulsar/discuss';
import collection from './pages/projects/pulsar/collection';
import UnderConstruction from './pages/underconstruction';
import ExpandedView from './pages/projects/pulsar/ExpandedView';



export default function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1 ">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/projects/pulsar" element={<PulsarPage/>}></Route>
        <Route path="/projects" element={<projects/>}></Route>
        <Route path="/projects/pulsar/about" element={<About />} />
        <Route path="/projects/pulsar/classify" element={<classify />} />
        <Route path="/projects/pulsar/collection" element={<collection />} />
        <Route path="/projects/pulsar/discuss" element={<Talk/>} />
        <Route path="/about" element={<MainAbout/>} />
        <Route path="/talk" element={<Talk/>} />
        <Route path="/register" element={<UnderConstruction/>} />
        <Route path="/login" element={<UnderConstruction/>} />
        <Route path="/getinvolved" element={<Link to="https://sih-frontend-beta.vercel.app/" />} />
        <Route path="/build" element={<UnderConstruction/>} />
        <Route path="/news" element={<UnderConstruction/>} />
        <Route path="/projects/pulsar/expanded-view" element={<ExpandedView />} /> {/* New Route */}
      </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}
