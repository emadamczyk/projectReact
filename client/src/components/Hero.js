import React from 'react';
import bike from '../img/background.jpg';
import Center from 'react-center';
import Button from '@material-ui/core/Button';
import NavBarLanding from '../components/NavBarLanding';
//import Button from '../components/Button';
import { Link } from 'react-router-dom';
import "./Hero.css";


const Hero = () => {
  return (
    <section style={{position: "relative", textAlign: "center"}}>
      <div  
      id="hero"
      className="blue lighten-4"
      className="backgroundImg"
     
      
    >
    
        <div>
            <p id="motto" >WE LOVE SAFE BIKING</p>
          
       
        </div>   
   <h1>hello</h1>
    <div id="chainButton">


    </div>
    </div>

   

   
    </section>


  );
};

export default Hero;