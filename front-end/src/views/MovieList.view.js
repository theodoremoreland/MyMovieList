// React
import { useEffect, useState } from 'react';

// Styles
import './MovieList.view.css';

// Components
import Card from '../components/Card';

// API
import { fetchMovies } from '../api/fetchMovies';

// Icons
import { CgSearch } from "react-icons/cg";

export default function MovieListView() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const updateMovies = async (event) => {
        event.preventDefault();

        const movies = await fetchMovies(searchTerm)
            .then(movies => movies)
            .catch(e => console.error(e));
        
        setMovies(movies);
    }

    useEffect(() => {
        fetchMovies()
            .then(movies => setMovies(movies))
            .catch(e => console.error(e));
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
                    movies.map(movie => <Card key={`${movie.title} (${movie.year})}`} title={`${movie.title} (${movie.year})`} />)
                }
            </ul>
        </div>
    );
}