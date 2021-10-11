export const init = () => {
    const profile = localStorage.getItem("profile");

    if (!profile) {
        const username = "Demo User";
        const pic = "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        const location = "Saint Louis, MO";

        localStorage.setItem("profile", JSON.stringify({ username, pic, location }));
    }
}

export const updateProfile = ({ username, pic, location }) => {
    localStorage.setItem("profile", JSON.stringify({ username, pic, location }));
}