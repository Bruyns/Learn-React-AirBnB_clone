import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

/* function App() {
    const firstName = "Joe";
    const lastName = "Schmoe";
    const date = new Date();
    const hours = date.getHours() % 12;

    return (
        <h1>Hello {firstName} {lastName}! it is currently {hours} oclock!</h1>
    )
}


function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "Good morning"
    }else if (hours >=12 && hours < 17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }

    return(
        <h1>Good {timeOfDay}</h1>
    )
}
*/

ReactDOM.render(<App />, document.getElementById("root"))


