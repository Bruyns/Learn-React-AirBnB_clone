import React from "react";
// import ReactDOM from "react-dom";
import Jokes from "./components/Joke";
import jokesData from "../jokesData";


export default function App () {
  const jokeElements = jokesData.map((Joke) => {
    return <Jokes setup = {Joke.setup} 
              punchline = {Joke.punchline} />
  })
  return (
    <div>
        {jokeElements}
    </div>
  )
}

/*
const colors = [<h3>red</h3>,
                <h3>orange</h3>, 
                <h3>yellow</h3>, 
                <h3>green</h3>, 
                <h3>blue</h3>, 
                <h3>indigo</h3>,
                <h3>violet</h3>]
*/

/*
      <div>
        <h3>
          {colors}
        </h3>
      </div>
      <Jokes
        number = "1"
        Setup = "I got my daughter a fridge for her birthday."
        Punchline = "I can't wait to see her face light up when she opens it."
        isPun = {true}
        upvotes = {10}
        downvotes = {3}
        comments = {
          [{author: "the dude", body: "writtene at home", title: "fridge"}]
        }
      />
      <Jokes
      number = "2"
        Setup = "How did the hacker escape the police?"
        Punchline = "He just ransomware!"
        isPun = {true}
        upvotes = {10}
        downvotes = {3}
        comments = {
          [{author: "", body: "", title: ""}]
        }
      />
      <Jokes
      number = "3"
        Setup = "Why don't pirates travel on mountain roads?"
        Punchline = "Scurvy."
        isPun = {true}
        upvotes = {10}
        downvotes = {3}
        comments = {
          [{author: "", body: "", title: ""}]
        }
      />
      <Jokes
      number = "4"
        Setup = "Why do bees stay in the hive in the winter?"
        Punchline = "Swarm."
        isPun = {true}
        upvotes = {10}
        downvotes = {3}
        comments = {
          [{author: "", body: "", title: ""}]
        }
      />
      <Jokes
      number = "5"
        Setup = "What's the best thing about Switzerland?"
        Punchline = "I don't know, but the flag is a big plus!"
        isPun = {true}
        upvotes = {10}
        downvotes = {3}
        comments = {
          [{author: "", body: "", title: ""}]
        }
      />
        <Jokes
          number = "6"
          Punchline = "It’s hard to explain puns to kleptomaniacs because they always take things literally."
          isPun = {false}
          upvotes = {10}
          downvotes = {3}
          comments = {
            [{author: "", body: "", title: ""}]
          }
        />
        */