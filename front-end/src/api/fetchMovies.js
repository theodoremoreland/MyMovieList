/**
 * Attempts to retreive list of movie titles w / year.
 * Returns an array of objects containing "title" and "year" for movie.
 * @param {String=} searchTerm - Title of movie to retreive.
 */
export const fetchMovies = async (searchTerm) => {
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    const movies = await fetch(`${process.env.REACT_APP_MYMOVIELIST_API_ENDPOINT}/get-movies${searchTerm ? "?search=" + searchTerm : ""}`, requestOptions)
      .then(response => {
        if (response.status !== 200) {
            return Promise.reject(`${response.status} ${response.statusText}`);
        };

        return response.json();
      })
      .then(movies => movies)
      .catch(error => {
        console.error(error);

        return [];
      });

      return movies;
  };