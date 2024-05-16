import React from 'react';
import fds6 from "../assets/fds6.jpg"
import fds4 from "../assets/fds4.jpg"
import fds7 from "../assets/fds7.jpg"

const Blog = () => {
  const blogData = [
    {
      img: fds6,
      title: "Fact About Indian Food",
      link: "https://www.littleindiaofdenver.com/blog/7-facts-you-never-knew-about-indian-food/"
    },
    {
      img: fds4,
      title: "Different Type of Burger",
      link: "https://www.finedininglovers.com/article/burger-types-famous-to-make"
    },
    {
      img: fds7,
      title: "Delicious Chicken Recipes",
      link: "https://themodernproper.com/60-best-chicken-breast-recipes"
    }
  ];

  return (
    <div className="crd">
      {blogData.map((blog, index) => (
        <div className="blog" key={index}>
          <img src={blog.img} alt="Blog" />
          <h2>{blog.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur iusto.</p>
          <a href={blog.link}>Read More</a>
        </div>
      ))}

     
    </div>
  );
};

export default Blog;
