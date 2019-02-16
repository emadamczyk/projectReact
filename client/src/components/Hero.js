import React from 'react';
import bike from '../img/bikeBanner.png';
import Center from 'react-center';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <section 
      id="hero"
      className="blue lighten-4"
      style={{overflow: "hidden", backgroundSize: "cover", height: "700px", backgroundImage: 'url(' + bike + ')'}}
    >

    <Center >
        <div>
            <p style={{fontSize: "100px"}}>WE LOVE SAFE BIKE LANES</p>
        </div>   
    </Center>

    <Button component={Link} to="/home">
        POST AN INCIDENT!
        </Button>
    </section>


  );
};

export default Hero;