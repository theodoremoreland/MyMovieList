// React
import { useEffect, useState, useRef } from 'react';

// Styles
import './MovieList.view.css';

// Components
import Card from '../components/Card';

// API
import { fetchMovies } from '../api/fetchMovies';
import { fetchMoviePoster } from '../api/fetchMoviePoster';

// Icons
import { CgSearch } from "react-icons/cg";

export default function MovieListView() {
    const [movies, setMovies] = useState([]);
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
        fetchMovies()
            .then((movies) => {
                setMovies(movies);
                inputRef.current.focus();
            })
            .catch(e => console.error(e));
    }, []);

    useEffect(() => {
        // Needed to avoid undefined error.
        if (movies[0] !== undefined) {
            // Checks to see if current array of movies have a .poster property.
            const hasAlreadyFetchedPosters = movies[0].poster;

            // Essentially assigns .poster property to movies array.
            // Checks to see if property exists already before running as to avoind infinite loop.
            if (!hasAlreadyFetchedPosters) {
                // Fetches all posters at once, but only resolves when all fetches are complete.
                Promise.all(
                        [...movies].map(movie => fetchMoviePoster(movie.title, movie.year))
                    )
                    .then(posters => {
                        const moviesWithPosters = [...movies].map((movie, index) => {
                            return { ...movie, "poster": posters[index] };
                        })

                        setMovies(moviesWithPosters);
                    })
                    .catch(e => console.log(e))
                ;
            }
        }
    }, [movies]);

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
                            <Card
                                key={`${movie.title} (${movie.year}) - ${movie.origin}}`}
                                title={`${movie.title} (${movie.year})`}
                                pic={movie.poster} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}