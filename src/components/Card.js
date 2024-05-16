import React from 'react';
import fds1 from "../assets/fds1.jpg"
import fds2 from "../assets/fds2.jpg"
import fds3 from "../assets/fds3.jpg"
import fds4 from "../assets/fds4.jpg"
import fds5 from "../assets/fds5.jpg"
import fds6 from "../assets/fds6.jpg"


const Card = () => {
    const arr = [
        fds1,fds2,fds3,fds4,fds5,fds6
    ]
  return (
    <div className="crd">
      {arr.map((num, index) => (
        <div className="card" key={index}>
          <img src={num} alt="Food" />
          <h2>299 Rupees Only</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur iusto.</p>
          <button>Order Now</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
