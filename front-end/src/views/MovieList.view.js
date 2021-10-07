// React
import { useEffect, useState } from 'react';

// Styles
import './MovieList.view.css';

// Components
import Card from '../components/Card';

// api
import { fetchMovies } from '../api/fetchMovies';

// icons
import { CgSearch } from "react-icons/cg";

export default function MovieListView() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
                        onChange={event => setSearchTerm(event.target.value)}
                        value={searchTerm}
                    />
                    <CgSearch
                        className="searchIcon"
                        onClick={async (event) => {
                            event.preventDefault();

                            const movies = await fetchMovies(searchTerm)
                                .then(movies => movies)
                                .catch(e => console.error(e));
                            
                            setMovies(movies);
                            }}
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