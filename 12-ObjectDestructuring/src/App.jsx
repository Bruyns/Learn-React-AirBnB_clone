import React from "react";
import ReactDOM from "react-dom";
import Contact from "./components/contact"


export default function App () {
  return(
    <div>
    <Contact 
    image = "./src/images/mr-whiskerson.png"
    name = "mr whiskerson"
    phoneNumber = "(212) 555-1234"
    emailAddress = "mr.whiskaz@catnip.meow"
    />
    <Contact 
        image = "./src/images/fluffykins.png"
        name = "Fluffykins"
        phoneNumber = "(212) 555-2345"
        emailAddress = "fluff@me.com"
    />
    <Contact 
        image = "./src/images/felix.png"
        name = "Felix"
        phoneNumber = "(212) 555-4567"
        emailAddress = "thecat@hotmail.com"
    />
    <Contact 
        image = "./src/images/pumpkin.png"
        name = "Pumpkin"
        phoneNumber = "(0800) CAT KING"
        emailAddress = "pumpkin@scrimba.com"
    />
    </div>
    )
  }
  