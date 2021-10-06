import './Movie.view.css';

export default function MovieView({ year, title, director, origin, wiki, cast, genre, plot }) {
  return (
    <div className="movieCard">
        {/* <img src="https://www.themoviedb.org/t/p/original/9fewYMd61WydJoqmV2HHP5IpuBe.jpg" alt="demo" /> */}
        <h2 className="movietitle">
            Demo title
        </h2>
    </div>
  );
}