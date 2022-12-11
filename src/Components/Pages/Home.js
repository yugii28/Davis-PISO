import React from "react";
import './App.css';


function Home() {
    return (
        <div>
    <div>
    <div class = "everything" >
      <div>
        <h1 class = "title">Pre-Health Indian Student Organization</h1> 
        <h1 class = "underline"></h1>
          <div class = "heading-and-body">
            <h2 class = "who-are-we">Who are we?</h2>
              <div class="row">
                <div class="first-column-1 body-and-buttons">
                  PISO is a student-run organization that aims to support and provide resources for the Indian pre-health community at UC Davis. Our goal is to act as an outlet to empower an array of cultural and ethnic elements of the Indian community alongside bringing awareness to several health-related careers. PISO also strives to build a sense of belonging and togetherness while offering insight into pre-health professions as well as helping the Indian society expand as a close-knit family. We hope to not only help pave a path for individuals to focus on personal growth but also to create meaningful connections and foster feelings of companionship and camaraderie.                <br></br>
                </div>
                <div class="last-column-1">
                  <img src="/general-pic.jpeg" style = {{width: "90%", height: "auto"}}/>
                </div>
              </div>
          </div>    
      </div>
    </div>
    <div class = "row">
      <h1></h1>
      <div class = "first-column">
        <img src = "/book.png" style = {{width: "20%", height: "auto"}}></img>
        <h2 style = {{color: "black"}}>Resources</h2>
        <p class = "image-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis obcaecati nesciunt provident ipsum tenetur dolorem deleniti voluptatibus, odio ipsam blanditiis. Velit corporis vero officia itaque alias, voluptatibus quod ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div class = "column">
        <img src = "/connection-unscreen.gif" style = {{width: "20%", height: "auto"}}></img>
        <h2 style = {{color: "black"}}>Community</h2>
        <p class = "image-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis obcaecati nesciunt provident ipsum tenetur dolorem deleniti voluptatibus, odio ipsam blanditiis. Velit corporis vero officia itaque alias, voluptatibus quod ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div class = "last-column">
        <img src = "/career.png" class = "career" style = {{width: "17%", height: "auto"}}></img>
        <h3></h3>
        <h2 style = {{color: "black"}}>Career</h2>
        <p class = "image-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis obcaecati nesciunt provident ipsum tenetur dolorem deleniti voluptatibus, odio ipsam blanditiis. Velit corporis vero officia itaque alias, voluptatibus quod ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  </div> 
  </div>
    )
}

export default Home;