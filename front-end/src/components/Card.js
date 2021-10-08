import './Card.css';

import loadingAnimation from "../images/loading-animation.gif";

export default function Card({ title, pic, shape = "rect", onClick }) {
    return (
        <div
            className={`card ${shape}`}
            onClick={e => onClick(e)}
        >
            <img
                src={pic ? pic: loadingAnimation}
                alt="Movie poster"
            />
            <h3>{title}</h3>
        </div>
    );
  }