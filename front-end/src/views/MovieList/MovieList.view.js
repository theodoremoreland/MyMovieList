// React
import { useEffect,
    useState,
    useRef,
    useContext
} from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './MovieList.view.css';

// Context
import { MoviesContext } from '../../contexts/MoviesContext';

// Components
import Card from '../../components/Card/Card';

// API
import { fetchMovies } from '../../api/fetchMovies';

// Icons
import { CgSearch } from "react-icons/cg";

export default function MovieListView() {
    const { movies, setMovies } = useContext(MoviesContext);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();

    const updateMovies = async (event) => {
        event.preventDefault();

        const movies = await fetchMovies(searchTerm)
            .then(movies => movies)
            .catch(e => console.error(e));
        
        setMovies(movies);
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of page.
        inputRef.current.focus();
    }, []);

    return (
        <div className="movieListContainer">
            <div className="lip">
                <h1>Movies</h1> 
                <form>
                    <input
                        type="text"
                        placeholder="Movie title"
                        value={searchTerm}
                        ref={inputRef}
                        onChange={event => setSearchTerm(event.target.value)}
                        onKeyDown={event => {
                            if (event.key === "Enter") updateMovies(event);
                        }}
                    />
                    <CgSearch
                        className="searchIcon"
                        onClick={(event) => updateMovies(event)}
                    />
                </form>
            </div>
            <ul className="movieList">
                {
                    movies.map((movie) => {
                        return (
                            <NavLink
                                className="navLink"
                                key={`${movie.title} (${movie.year}) - ${movie.origin}}`}
                                to={{
                                    pathname: "/movie",
                                    state: { ...movie }
                                }}
                            >
                                <Card
                                    
                                    title={`${movie.title} (${movie.year})`}
                                    pic={movie.poster} 
                                />
                            </NavLink>

                        )
                    })
                }
            </ul>
        </div>
    );
}