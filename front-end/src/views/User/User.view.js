// React
import { useEffect, useState } from 'react';

// Controllers
import {
    init,
    updateProfile
} from "./User.controller";

// Styles
import './User.view.css';

// Components
import Banner from '../../components/Banner/Banner';
import Item from '../../components/Item/Item';

export default function UserView() {
    const [username, setUsername] = useState("");
    const [pic, setPic] = useState("");
    const [location, setLocation] = useState("");
    const [watchlist, setWatchList] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [dropped, setDropped] = useState([]);
    const [favorites, setFavories] = useState([]);

    const handleTitleChange = (e) => {
        const value = e.target.value;

        setUsername(value);
    }

    const handleSubtitleChange = (e) => {
        const value = e.target.value;

        setLocation(value);
    }

    const update = () => {
        updateProfile({ username, pic, location });
    }

    useEffect(() => {
        init();

        const {
            username,
            pic,
            location
        } = JSON.parse(localStorage.getItem("profile"));

        setUsername(username);
        setPic(pic);
        setLocation(location);

        setWatchList(JSON.parse(localStorage.getItem("watchlist")) || []);
        setCompleted(JSON.parse(localStorage.getItem("completed")) || []);
        setDropped(JSON.parse(localStorage.getItem("dropped")) || []);
        setFavories(JSON.parse(localStorage.getItem("favorites")) || []);
    }, []);

    return (
        <div className="userViewContainer">
            <Banner
                title={username}
                pic={pic}
                imgType="avatar"
                subtitle={location}
                isMutable={true}
                handleSubtitleChange={handleSubtitleChange}
                handleTitleChange={handleTitleChange}
                update={update}
            />
            <ul>
                <li>
                    <h3>Favorites</h3>
                    <ul>
                        {
                            favorites.map(e => <Item className="movieItem" key={`favorite: ${e}`} text={e} />)
                        }
                    </ul>
                </li>
                <li>
                    <h3>Watchlist</h3>
                    <ul>
                        {
                            watchlist.map(e => <Item key={`watchlist: ${e}`} text={e} />)
                        }
                    </ul>
                </li>
                <li>
                    <h3>Completed</h3>
                    <ul>
                        {
                            completed.map(e => <Item key={`completed: ${e}`} text={e} />)
                        }
                    </ul>
                </li>
                <li>
                    <h3>Dropped</h3>
                    <ul>
                        {
                            dropped.map(e => <Item key={`dropped: ${e}`} text={e} />)
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
}