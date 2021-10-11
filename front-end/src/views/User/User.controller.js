export const init = () => {
    const profile = localStorage.getItem("profile");

    if (!profile) {
        const username = "Demo User";
        const pic = "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        const location = "Saint Louis, MO";
        const watchlist = [];
        const completed = [];
        const dropped = [];
        const favorites = [];

        localStorage.setItem("profile", JSON.stringify({ username, pic, location, watchlist, completed, dropped, favorites }));
    }
}

export const updateProfile = ({ username, pic, location, watchlist, completed, dropped, favorites }) => {
    localStorage.setItem("profile", JSON.stringify({ username, pic, location, watchlist, completed, dropped, favorites }));
}