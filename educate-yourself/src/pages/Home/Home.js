import './Home.css';
import React ,{ useRef } from 'react';
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const homeRef=useRef(null);
    const navigate=useNavigate();
    const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
};
    const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (<>    
    <div className="header">
     <span>logo</span>
     <nav className="navbar">
         <a href="#" onClick={(e)=>{e.preventDefault();scrollToHome();}}>Home</a>
         <a href="#" onClick={(e)=> {e.preventDefault();scrollToAbout();} }>About</a>
         <a href="#" onClick={(e) => {e.preventDefault();scrollToContact();}}>Contact</a>
        
     </nav>
     <div>
        <button className='btn' onClick={()=> navigate('/login')} >Log in</button>
        <button className='btn'>Sign Up</button>
     </div> 
    </div>

    <div ref={homeRef}className="content">
      <h1>Welcome to Educate Yourself</h1>
    </div>
    <div className="hero-text">
        <h2>Learn Smarter, Not Harder</h2>
        <p>
           Visualize complex concepts, explore interactive lessons, and track your
           learning journey based on your class and subjects.
        </p>
        <button>Start Now</button>
    </div>
    
    <section ref={aboutRef} className="about">
        <h2>About Us</h2>
        <p>
          Educate Yourself is a personalized learning platform that helps
          students understand concepts through visual learning. Our goal is to
          make education more interactive, engaging, and effective by adapting
          content to each student's class and learning progress.
        </p>

        <p>
          Students can explore subjects, track their progress, and learn through
          diagrams, animations, quizzes, and practical examples that make
          complex topics easier to understand.
        </p>
    </section>
       {/* contact section */}
    <section ref={contactRef} className="contact">
        <h2>Contact Us</h2>

        <p>
        Have questions or suggestions? We'd love to hear from you.
        </p>

        <div className="contact-details">
          <p>Email: support@educateyourself.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Dehradun, Uttarakhand, India</p>
        </div>
    </section>
       {/* footer */}
    <footer className="footer">
      <p>© 2026 Educate Yourself. All Rights Reserved.</p>
    </footer>
    </>)
}
export default Home;