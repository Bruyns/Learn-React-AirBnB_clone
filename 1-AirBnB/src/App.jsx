// import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const profileDetails = data.map((item) => {
    return <Card 
                  id = {item.id}
                  title = {item.title}
                  description = {item.description}
                  price = {item.price}
                  image = {item.coverImg}
                  stats1 = {item.stats.rating} 
                  stats2 = {item.stats.reviewCount} 
                  location = {item.location}
                  openSpots = {item.openSpots}
                  />
  })
    return (
      <div>
        <Navbar />
        {profileDetails}
        <Main />
      </div>
    )
  }

  /*
  <Card
    img = "./src/images/katie-zaferes.png"
    ratingImg = "./src/images/star.png"  
    rating = "5.0"
    reviewCount = {6}
    country = "USA"
    title = "Life Lessons with Katie Zaferes"
    price = {136}
  />
  */