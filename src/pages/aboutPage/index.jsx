import React from 'react';
import Header from '../../components/Header';
import NavBar from "../../components/NavBar";
import ProfilePic from "../../images/profile-pic.png";
import AssignmentPic from "../../images/assignment-pic.png";
import './styles.css';

const AboutPage = () => {
  return (
    <div>
        <Header title = "About" />
        <NavBar />
        <div className="container">
            <div className="profile-pics">
                <div className="profile-pic">
                    <img src={ProfilePic} alt="Profile 1" className="profile-pic" />
                </div>
                <div className="profile-pic">
                    <img src={AssignmentPic} alt="Profile 2" className="profile-pic" />
                </div>
            </div>
            <div className="info">
              <h1>About Me and The Project</h1>
              <p>
                Hi, my name is Sei Young Andres Lee. I am a 4th year studying Computer Science and Mathematics and
                I am a passionate web developer with experience in HTML, CSS, JavaScript, ReactJS, and various web frameworks.
                I love building user-friendly and visually appealing websites that deliver a great user experience. 
                Concurrent to CPSC 455 I am taking Math 316 to make sure that I have more time to prepare for interviews and get a job next year.
              </p>
              <p>
                In my spare time, I enjoy excercising and learning about modern technologies. 
                I just ran the BMO marathon on May 7 and I always make sure to stay active at least a few minutes every day.
                To stay up to date with tech I'm signed up to some newletters that I read whenever I have time. 
              </p>
              <p>
                Feel free to reach out to me through my email <a href="mailto:andreslee99@gmail.com">andreslee99@gmail.com</a> for any inquiries or collaboration opportunities. You can also find me on  <a href="https://www.linkedin.com/in/seiyoungandres/">LinkedIn</a> to learn more about my work and connect with me.
              </p>
              
              <p>
                The project/assignment asks to use ReactJS/Redux to create a simple Inventory website.
                It has to have a form with multiple inputs; button to clear and submit; pre-loaded item to initialize reducer;
                list of items; button to delete all items; sufficient styling; modal; and finally some creative aspect that I add that is not mandatory.
                The current website has all this features in shows how many items are showing and are in total, error handling, editing in more info, delete
                one item, react-helmet for meta data, searching, sorting, modal clicking outside to close, and many more.
              </p>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;