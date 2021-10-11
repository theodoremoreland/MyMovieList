// Components
import Banner from '../components/Banner';

// Styles
import './Movie.view.css';

export default function MovieView({ location }) {
    const { title, year, poster, director, origin, wiki_page, crew, genre } = location.state;

    return (
        <div className="movieViewContainer">
            <Banner
                title={`${title} (${year})`}
                pic={poster}
                imgType="poster"
                subtitle={""}
                isMutable={false}
            />
            <div className="buttonGroup">
                <button id="favorites">
                    Add to favorites
                </button>
                <button id="watchlist">
                    Add to watchlist
                </button>
                <button id="completed">
                    Add to completed
                </button>
                <button id="dropped">
                    Add to dropped
                </button>
            </div>
            <a
                href={wiki_page}
                target="_blank"
                rel="noreferrer"
                id="wiki"
            >
                <p>-- Wiki --</p>
            </a>
            <ul>
                <li>
                    <h3>Cast</h3>
                    <p>{crew}</p>
                </li>
                <li>
                    <h3>Director</h3>
                    <p>{director}</p>
                </li>
                <li>
                    <h3>Origin</h3>
                    <p>{origin}</p>
                </li>
                <li>
                    <h3>Genre</h3>
                    <p>{genre}</p>
                </li>
            </ul>
        </div>
    );
}