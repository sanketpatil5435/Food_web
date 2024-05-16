import React from 'react'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Blog from '../components/Blog';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Review from '../components/Review';
import Login from '../components/Login';
import Nav from '../components/Nav';
import '../App.css';
import '../Foodweb.css';
import img1 from "../assets/fds1.jpg"
import img2 from "../assets/fds2.jpg"
import burgerImg from "../assets/burger.png"
import { useState } from 'react';



function Home(){


        const [showLogin, setShowLogin] = useState(false);
        const [showNav, setShowNav] = useState(false);
        const [reviewIndex, setReviewIndex] = useState(0);

        const login = () => setShowLogin(!showLogin);
        const nav = () => setShowNav(!showNav);

        const reviews = [
            { img: {img1}, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere modi, repudiandae nostrum obcaecati quo?", rating: 4.5 },
            { img: {burgerImg}, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere modi, repudiandae nostrum obcaecati quo?", rating: 4.5 },
            { img: {img2}, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere modi, repudiandae nostrum obcaecati quo?", rating: 4.5 }
        ];

        const next = () => setReviewIndex((reviewIndex + 1) % reviews.length);
        const pre = () => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length);
  return (
    <div>
     
      {showLogin && <Login />}
      {showNav && <Nav />}
      <Main />
      <Card />
      <Blog />
      <Review review={reviews[reviewIndex]} />
      <div className="btn">
        <button onClick={pre}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
     

      <Footer />
    
    
    </div>
  )
}

export default Home