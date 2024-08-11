import React from 'react'
import { Container } from "react-bootstrap";
import image from '../assets/userlogo.png'

export default function About() {
  return (
       <Container style={{paddingTop:'60px'}}>
          <div className=" row col-sm-12 mx-auto mt-5">
              <div className="col-sm-6 mt-5">
              <img
                src={image}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </div>
              <div className="col-sm-6 text-white mt-5">
                <h1 className='border-bottom'>About me</h1>
                <h3 className=" ">
                I'm
                <strong className="main-name"> Prince Kumar</strong>
              </h3>
              <p>A passionate and dedicated React.js Frontend Engineer with 6 months of hands-on experience through an internship.</p>
              
              <h3 className="main-name">Vision</h3>
                  <ul>
                    <li><p>To continuously learn and grow as a frontend developer, contributing to innovative and impactful projects.</p></li>
                    <li><p>To leverage my skills in React.js to build efficient, scalable, and visually appealing web applications.</p></li>
                  </ul>

                  
                  <h3 className="main-name">Personal Interests</h3>
                  <ul>
                    <li><p>A tech enthusiast with a keen interest in exploring new tools and frameworks</p></li>
                    <li><p>Passionate about design and aesthetics, ensuring that applications are not only functional but also visually pleasing.</p></li>
                  </ul>
              </div>
          </div>
       </Container>
   
  )
}

