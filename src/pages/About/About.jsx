import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'> 
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About UniBlend Book Recommendation</h2>
            <p className='fs-17'>Welcome to UniBlend Book Recommendation, an integral part of the comprehensive UniBlend All-In-One Recommendation System. This innovative platform is the brainchild of a talented team comprising Ratul, Aadarsh, Udayan, Manish Roy, and Manish Jena. </p>
            <p className='fs-17'>Our system is meticulously designed to cater to the diverse literary tastes of avid readers. Leveraging advanced algorithms and a deep understanding of reader preferences, UniBlend Book Recommendation offers personalized book suggestions that resonate with your reading style and interests. Whether you're a fan of classic literature, contemporary bestsellers, or niche genres, our system ensures you discover books that truly captivate and inspire. Join us in exploring a world of stories tailored just for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
