  import React from 'react';
  import './page.css';
  import Footer from '../includes/Footer';
  import Aditional from './Aditional';
import Container1 from './Container1';
import Container2 from './Container2';
import Albums from './Albums';
import Slider from './Slider';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Container2_1 from './Container2.1';
  const Home = () => {
    return (
      <div className="container c">
        <div className="row">
          <div className="col-md-12">
           <Slider/>
            <Albums/>
            <Container2/>
            <Container2_1/>
                <Container3/>
     <Container4/>
     <Container5/>
    <Aditional/>
<Container1/>
<Footer/>
          </div>
        </div>
      </div>
    );
  };

  export default Home;

