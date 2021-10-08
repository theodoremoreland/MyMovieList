import placeholderPoster from "../images/placeholder-movie-poster.jpg"

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

/**
 * Attempts to retreive url for movie poster via www.omdbapi.com API
 * Returns Promise object that resolves to url for movie poster
 * @param {String} title - Title of movie to retreive poster for.
 * @param {String} year - Year movie released for movie to retreive poster for.
 */
export const fetchMoviePoster = async (title, year) => {
    const posterURLUponResolve = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}&y=${year}`)
        .then(res => res.json())
        .then((data) => {
            const poster = data.Poster;

            if (!poster || /^http/.test(poster) === false) {
                return Promise.reject(`No poster found for ${title} ${year}`);
            }

            return poster;
        })
        .catch(e => {
            console.log(e);

            return placeholderPoster;
        });

    return posterURLUponResolve;
}