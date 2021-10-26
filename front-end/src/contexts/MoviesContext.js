// React
import { createContext, useState, useEffect } from "react";

// API
import { fetchMovies } from '../api/fetchMovies';
import { fetchMoviePoster } from "../api/fetchMoviePoster";

export const MoviesContext = createContext();

export default function MoviesProvider({children}) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        fetchMovies()
            .then((movies) => {
                setMovies(movies);
            })
            .catch(e => console.error(e));
    // eslint-disable-next-line
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
                        setSelectedMovie(moviesWithPosters[0]);
                    })
                    .catch(e => console.error(e))
                ;
            }
        }
    }, [movies]);

    return (
        <MoviesContext.Provider value={{ movies, setMovies, selectedMovie, setSelectedMovie }}>
            {children}
        </MoviesContext.Provider>
    )
}