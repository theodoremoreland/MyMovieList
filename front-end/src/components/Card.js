import './Card.css';

export default function Card({ title, pic, shape = "rect", onClick }) {
    return (
        <div
            className={`card ${shape}`}
            onClick={e => onClick(e)}
        >
            <img
                src={pic ? pic: "https://cdn.dribbble.com/users/295241/screenshots/4496315/loading-animation.gif"}
                alt="Movie poster"
            />
            <h3>{title}</h3>
        </div>
    );
  }