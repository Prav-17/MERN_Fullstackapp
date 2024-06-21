import React from 'react'
import ResponsiveAppBar from '../navbar/navbar';
import './about.css';



 const About  = (props) => {
  return(
    <div>
        <ResponsiveAppBar/>
        <div className="page">
      <div className="section">
        <h2>About This Website</h2>
        <p>
          Welcome to our website! This site is dedicated to providing insightful articles and resources on various topics. Our mission is to inform, educate, and engage our readers with high-quality content. Whether you're here to learn something new or just to browse, we hope you find our website useful and enjoyable.
        </p>
      </div>
      <div className="section">
        <h2>Note from the Author</h2>
        <div className="author-container">
          <img src="path_to_profile_picture.jpg" alt="Author" className="profile-picture" />
          <p>
            Hello! I'm Jane Doe, the creator and author behind this website. With a passion for writing and a love for sharing knowledge, I started this site to connect with like-minded individuals. My background is in journalism and digital marketing, and I enjoy exploring new ideas and trends in various fields. Thank you for visiting, and I hope you find the content here both informative and inspiring.
          </p>
        </div>
      </div>
    </div>
    </div>
   )
}

export default About;

