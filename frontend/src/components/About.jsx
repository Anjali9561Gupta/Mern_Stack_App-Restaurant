import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
            {/* <p>The only thing we're serious about is food.</p> */}
              
            </div>
            <p className="mid">
       We are thrilled to open our doors and share our passion for great food
       and exceptional service with you. Located in the vibrant heart of Dehradooon,
       Little Panda is the latest addition to the local culinary scene, offering a 
       fresh and exciting dining experience.Little Panda was founded in 2020 by 
       Goyal Couple, who had a vision of creating a space where friends and family 
       could gather to enjoy delicious food in a warm and inviting atmosphere. 
       Thank you for supporting us as we embark on this exciting journey. We can’t
       wait to serve you!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;