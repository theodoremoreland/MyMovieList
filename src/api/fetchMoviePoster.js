const apiKey = process.env.REACT_APP_OMDB_API_KEY;

/**
 * Attempts to retreive url for movie poster via www.omdbapi.com API
 * Returns Promise object that resolves to url for movie poster
 * @param {String} title - Title of movie to retreive poster for.
 */
export const fetchMoviePoster = async (title) => {
    const posterURLUponResolve = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
        .then(res => res.json())
        .then(data => data.Poster)
        .catch(e => {
            console.error(e);

            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT860uK98ssmdtdQ986wYE2uUo4OJvJKGPDQwWABx7_W7WTHbBDoZms4AV7y-AXLF9DNRA&usqp=CAU";
        });

    return posterURLUponResolve;
}