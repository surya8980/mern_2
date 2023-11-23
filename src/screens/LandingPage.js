import React from 'react';
import '../App.css';
import biryani from '../assets/biryani.jpg';
import pasta from '../assets/pasta.jpg';
import pizza from '../assets/pizza.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/food`;
    navigate(path);
  };

  const routeChange2 = () => {
    let path = `/table`;
    navigate(path);
  };

  return (
    <div className="App container-fluid">
      <div className="App-header">
        <div className="block">
          <div className="hi">
         
            <p className="paragraph text-left m-5"> <h1 className="yes header-text">Treat Yourself to Flavorful Adventures.</h1><br/>An epitome of culinary excellence and sophistication. Nestled in the heart of GUNTUR, our restaurant invites you to embark on a gastronomic journey that transcends the ordinary. Here, each dish is a masterpiece, meticulously crafted to tantalize your taste buds and elevate your dining experience to new heights.</p>
          </div>
          <div className="hi2">
            <button className="button-54" role="button" onClick={routeChange2}>
              BOOK A TABLE NOW!!!
            </button>
            <button className="button-54" role="button" onClick={routeChange}>
              ORDER FOOD NOW!!!
            </button>
          </div>
        </div>
      </div>

      <div className="featured container">
        <h1 className="featured-title">Featured Dishes</h1>
        <div className="row">
          <div className="col-4">
            <img src={biryani} alt="biryani" />
            <h4>Chicken Biryani</h4>
            <div className="rating"></div>
            <p>Rs. 350</p>
          </div>
          <div className="col-4">
            <img src={pasta} alt="pasta" />
            <h4>Pasta</h4>
            <div className="rating"></div>
            <p>Rs. 200</p>
          </div>
          <div className="col-4">
            <img src={pizza} alt="pizza" />
            <h4>Pizza</h4>
            <div className="rating"></div>
            <p>Rs. 699</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
