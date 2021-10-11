import './Card.css';

import loadingAnimation from "../../images/loading-animation.gif";

export default function Card({ title, pic, shape = "rect" }) {
    return (
        <div
            className={`card ${shape}`}
        >
            <img
                src={pic ? pic: loadingAnimation}
                alt="Movie poster"
            />
            <h3>{title}</h3>
        </div>
    );
  }