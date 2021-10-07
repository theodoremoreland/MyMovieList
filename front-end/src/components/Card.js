import './Card.css';

export default function Card({ title, shape = "rect", onClick, pic }) {

    return (
        <div
            className={`card ${shape}`}
            onClick={e => onClick(e)}
        >
            <img src={pic ? pic: "https://www.themoviedb.org/t/p/original/9fewYMd61WydJoqmV2HHP5IpuBe.jpg"} alt="demo" />
            <h3>{title}</h3>
        </div>
    );
  }