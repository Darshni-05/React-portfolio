import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src={process.env.PUBLIC_URL + "/me.png"}
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Darshni Gupta</strong>. I am a fourth-year Computer Science and Engineering (CSE) student. I am passionate about software development and aspire to create meaningful and user-friendly digital experiences. With a strong foundation in front-end development, proficiency in Java for Data Structures and Algorithms (DSA), and experience in Flutter for Android app development, I constantly seek opportunities to expand my skill set and stay updated with the latest industry trends.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Throughout my academic journey, I have acquired a solid understanding of web technologies such as HTML, CSS, and JavaScript, which enables me to create visually appealing and responsive user interfaces. I enjoy crafting elegant and intuitive designs that not only captivate users but also prioritize usability and accessibility.
            In addition to front-end development, I am currently exploring the MERN (MongoDB, Express.js, React.js, Node.js) full stack. This comprehensive stack allows me to work seamlessly across the entire development process, from the back-end to the front-end, ensuring the creation of robust and scalable web applications.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
