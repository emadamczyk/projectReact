import React from 'react';
import bike from '../img/background.jpg';
import Center from 'react-center';
import Button from '@material-ui/core/Button';
import NavBarLanding from '../components/NavBarLanding';
//import Button from '../components/Button';
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <section style={{position: "relative", textAlign: "center"}}>
      <div  
      id="hero"
      className="blue lighten-4"
      style={{overflow: "hidden", backgroundSize: "cover", height: "700px", backgroundImage: 'url(' + bike + ')', opacity: "0.45", zIndex: "-1"}}
      
    ></div>

    <Center >
        <div>
            <p style={{fontSize: "100px", color: "#fff", fontWeight: "bold", textStrokeWidth: "1px", textStrokeColor: "black", position: "absolute", top: "10%", left: "10%", right: "10%", zIndex: "2"}} overlayStyle={{opacity: "1"}}>WE LOVE SAFE BIKING</p>
        </div>   
    </Center>

    <Button component={Link} to="/home" className="btn-circle btn-xl">
        POST AN INCIDENT!
    </Button>
    </section>


  );
};

export default Hero;