import React from "react";
import style from "./Home.module.css";
import Cover from "../../assets/img/cover.png";
import Gmail from "../../assets/img/gmail.png";
import Linkedin from "../../assets/img/linkedin.png";
import Github from "../../assets/img/github.png";
import Twitter from "../../assets/img/twitter.png";
import logoReact from "../../assets/img/logo192.png";


const Home = () => {
  return (
    <>
    <div className={style.container}>
    <header className={style.header}>
        <img src={logoReact} alt="logo" className={style.logo} />
        
        <h1>Rodrigo Alexandre - Software Developer</h1>
    </header>    
    
      <div className={style.cover}>
        <img src={Cover} alt="cover" />
      </div>
      <div className={style.presentation}>
        <p>
          Hello! I am Rodrigo Alexandre, a software developer dedicated to
          transforming the way of showing your product or idea to the world.
        </p>
        <p>
          I have a history in the industry of telecommunications, making
          services to railways and gas & oil companies leading maintenance teams
          or helping the infrastructures of summits of software when I had
          contact with sêniors developers and saw an opportunity to generate
          more impact in the world through of software developing.
        </p>
        <p>
          After a period dedicated to studying a range of fields of programming,
          I decided to deepen my new career firstly on Frontend and Mobile .{" "}
        </p>
        <p>Feel free to contact me!</p>
      </div>
      
   
    </div>
       <div className={style.contact}>
       <a href='mailto:rodrigo.anst@gmail.com'>
         <img src={Gmail} alt="gmail" />
       </a>
       <a href="https://www.linkedin.com/in/rodrigoalexandre79/">
         <img src={Linkedin} alt="linkedin" />
       </a>
       <a href="https://github.com/narradorww">
         <img src={Github} alt="github" />
       </a>
       <a href="https://twitter.com/NarradorWW">
         <img src={Twitter} alt="twitter" />
       </a>
     </div>

    <div className={style.projects}>
      <div className={style.projects__background}></div>

      <h2>Projects</h2>
      <p>I believe that the best manner to learn is through practice.  In this section, I present my personal projects and talk a bit about how I work and my main interests. </p>
    
    </div>
     </>
   
  );
};

export default Home;
