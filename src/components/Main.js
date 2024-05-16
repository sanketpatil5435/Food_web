import React from 'react';
import burgerImg from '../assets/burger.png';

const Main = () => {
  return (
    <div className="main">
      <div className="text">
        <h1>Simple & Tasty Recipes</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat Repellat consectetur elit. Placeat Repellat voluptas eligendi rerum est quibusdam tempora beatae molestias dicta.</p>
        <button>Explore More</button>
      </div>
      <img src={burgerImg} alt="Burger" />
    </div>
  );
};

export default Main;
