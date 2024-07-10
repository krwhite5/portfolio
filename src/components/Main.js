import React from "react";
import ImageShape from "./ImageShapes.js";
import Slideshow from "./Slideshow.js";
import AboutMe from "./AboutMe.js";
import Contact from './Contact.js'

function Main() {
    return(
        <div>
           <body class= " pb-4">
            <div class = "bg-success p-4" >
           <ImageShape ></ImageShape>
           </div>
           <div class = "bg-secondary p-4 " id= "AboutMe">
           <AboutMe></AboutMe>
           </div>
           <div id= "Projects" class ="bg-success">
           <Slideshow></Slideshow>
           </div>
           <div  class = "bg-success p-4" id= "Contact">
           <Contact></Contact>
           </div>

            </body>
        </div>
    )
}

export default Main