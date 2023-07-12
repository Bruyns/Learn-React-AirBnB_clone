import react from "react";

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./src/images/phone-icon.png" />
                <p>{props.phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src="./src/images/mail-icon.png" />
                <p>{props.emailAddress}</p>
            </div>
        </div>
    )
}