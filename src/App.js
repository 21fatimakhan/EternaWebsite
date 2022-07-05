import React from "react";
import TopBar from "./components/Top bar ";
import Header from "./components/Header";
import Slider from './components/Slider'
import Featured from "./components/Featured";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import "./css/style.css";

function App() {
  return (
    <div>
       
       <TopBar />
       <Header />
      <Slider />
       <Featured />
       <Clients />
       <Footer />
    </div>
   
    
  );
}

export default App;
