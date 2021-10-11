// Components
import Banner from '../components/Banner';

// Styles
import './Movie.view.css';

export default function MovieView({ location }) {
    const { title, year, poster, director, origin, wiki_page, crew, genre } = location.state;

    return (
        <div className="movieViewContainer">
            <Banner
                title={title}
                pic={poster}
                subtitle={year}
                handleSubtitleChange={() => {}}
                handleTitleChange={() => {}}
                update={() => {}}
            />
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
            <a
                href={wiki_page}
                target="_blank"
                rel="noreferrer"
            >
                <h3>Wiki</h3>
            </a>
        </div>
    );
}