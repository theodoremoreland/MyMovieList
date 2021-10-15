// React
import { useContext, useEffect, useRef } from 'react';

// Components
import Banner from '../../components/Banner/Banner';

// Styles
import './Movie.view.css';

// Context
import { MoviesContext } from '../../contexts/MoviesContext';

// Controller
import { addToLocalStorage } from './Movie.controller';

export default function MovieView({ location, navigation }) {
    const { selectedMovie, setSelectedMovie } = useContext(MoviesContext);
    const { 
        title,
        year,
        poster,
        director,
        origin,
        wiki_page,
        crew,
        genre } = selectedMovie ? selectedMovie : {};

    const containerRef = useRef();

    const handleAddToList = (event, listName) => {
        event.stopPropagation();

        addToLocalStorage(listName, title);
        alert(`Added "${title}" to ${listName}.`);
    }

    useEffect(() => {
        containerRef.current.scrollTo(0, 0);
        if (location.state) {
            setSelectedMovie(location.state);
        }
    // eslint-disable-next-line
    }, []);

    return (
        <div className="movieViewContainer" ref={containerRef}>
            <Banner
                title={`${title} (${year})`}
                pic={poster}
                imgType="poster"
                subtitle={""}
                isMutable={false}
            />
            <div className="buttonGroup">
                <button id="favorites" onClick={(event) =>  handleAddToList(event, "favorites")}>
                    Add to favorites
                </button>
                <button id="watchlist" onClick={(event) =>  handleAddToList(event, "watchlist")}>
                    Add to watchlist
                </button>
                <button id="completed" onClick={(event) =>  handleAddToList(event, "completed")}>
                    Add to completed
                </button>
                <button id="dropped" onClick={(event) =>  handleAddToList(event, "dropped")}> 
                    Add to dropped
                </button>
            </div>
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
                id="wiki"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/220px-Wikipedia-logo-v2.svg.png"
                    alt="wiki logo"
                />
                <h3>Wiki</h3>
            </a>
        </div>
    );
}