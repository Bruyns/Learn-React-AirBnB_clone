import React from "react";
import ReactDOM from "react-dom"

export default function Joke (props) {
    return (
        <div className="Jokes" >
                {props.setup && <h3>Setup: {props.setup}</h3>}
                <p className="Punchline">punchline: {props.punchline}</p>
        </div>
    )
}

/* <p className="votes">
<h4>{props.upvotes}</h4>
<h4>{props.downvotes}</h4>
</p>
<h2>joke {props.number}</h2>
<h4 className="Setup">setup - {props.Setup}</h4> 
<h3 className="joke-details">-{props.comments[0].author} -{props.comments[0].body} -{props.comments[0].title}</h3> */