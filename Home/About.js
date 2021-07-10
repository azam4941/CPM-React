import React from 'react';
import './about.css';
import ScrollText from 'react-scroll-text';
import { Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
     
    

     <ScrollText>Recognized as one of the top 15 research universities worldwide, 
      our culture of collaboration sparks discoveries that advance society and drive economic impact. Everything we do is dedicated to ensuring our students have the opportunity to become changemakers, 
      equipped with the multidisciplinary tools needed to accelerate answers to our world’s most pressing issues.</ScrollText>

    

<h2 className="head">Our Guidance Team</h2>
<div class="row">
<div class="column1">
    <div class="card1">
      <div class="container">
        <h2>Amlan Dey</h2>
        <p class="title">Project Mentor</p>
        <p>18 Years of Experience in IT </p>
       <p>amlan.dey@cognizant.com</p>
       
        
    
      </div>
    </div>
  </div>

  <div class="column1">
    <div class="card1">
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div class="container">
        <h2>Sharad Singh</h2>
        <p class="title">Project Guide</p>
        <p>Master in more than 100+ Programming Language </p>
       <p>sharad.singh4@cognizant.com</p>
        
    
      </div>
    </div>
  </div>
  </div>
  
<h2 className="head">Our Development Team</h2>
<div class="row">
<div class="column">
    <div class="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div class="container">
        <h3>Rishabh Sharma</h3>
        <p class="title">POD Member</p>
        <p>ID- 909564</p>
       <p>Rishabh.Sharma8@cognizant.com</p>
        
    
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div class="container">
        <h3>Azam Ali</h3>
        <p class="title">POD Leader</p>
        <p>ID- 909579</p>
       <p>azam.ali@cognizant.com</p>
        
    
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
       
      <div class="container">
        <h3>Sai Surendranath V </h3>
        <p class="title">POD Member</p>
        <p>ID- 909892</p>
       <p>vallabhaneni.saisurendranath@cognizant.com</p>
        
    
      </div> 
    </div>
  </div>
  <div class="column2">
    <div class="card">
     
      <div class="container">
        <h2>Parul Gupta</h2>
        <p class="title">POD Member</p>
        <p>ID- 909565</p>
        <p>parul.gupta4@cognizant.com</p>
        
        
      </div>
    </div>
  </div>

  
  
   
  <div class="column2">
    <div class="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
      <div class="container">
        <h2>Srilakshmi B M</h2>
        <p class="title">POD Member</p>
        <p>ID- 909581</p>
        <p>srilakshmi.bm@cognizant.com</p>
        
       
      </div>
    </div>
  </div>
  


  </div>
<div class="about-section">

  <h2>ABOUT US</h2>
  <marquee className="mar" behavior="scroll" direction="left" className="move" height="20%">
  At the College, we prefer the path less traveled. And it has led us to remarkable new ways of seeing and making a difference in the world.</marquee>
  </div>
<div class="contact-section">
  <h2>Contact Us </h2>
  <p>Tel: 0172-123456*********Mob: 9876543210</p>
  <p>Email: xyz@cognizant.com</p>
  </div>
 {/*  <div class="row">
<div class="column1">
    <div class="card2">
      <div class="container">
        <h2>Address Details</h2>
        <p>XYZ College</p>
       
       <p>ABC Location</p>
       <p>India</p>
        
    
      </div>
    </div>
  </div>

  <div class="column1">
    <div class="card2">
      
      <div class="container">
        <h2>Contact Details</h2>
        <p>Tel: 0172-123456</p>
        <p>Mob: 9876543210</p>
        
       <p>Email: xyz@cognizant.com</p>
        
    
      </div>
    </div>
  </div>
  </div> */}
  
     
    </div>
    
  );
};



export default About;