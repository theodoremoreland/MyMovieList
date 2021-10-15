// React
import { useEffect, useState, useRef } from 'react';

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
    const [favorites, setFavorites] = useState([]);

    const containerRef = useRef();

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
        alert("Username and location updated.");
    }

    const removeMovieFromList = (e, listName, text) => {
        const storageKeys = {
            "favorites": setFavorites,
            "watchlist": setWatchList,
            "completed": setCompleted,
            "dropped": setDropped
        };
        const list = JSON.parse(localStorage.getItem(listName));
        const updatedList = list.filter(title => title !== text);

        storageKeys[listName](updatedList);
        localStorage.setItem(listName, JSON.stringify(updatedList));
    }

    useEffect(() => {
        containerRef.current.scrollTo(0, 0); // Scroll to top of page.
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
        setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    }, []);

    return (
        <div className="userViewContainer" ref={containerRef}>
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
                            favorites.length > 0
                                ?   favorites.map(e => 
                                        <Item
                                            key={`favorites: ${e}`}
                                            text={e}
                                            listName="favorites"
                                            deleteCallback={removeMovieFromList}
                                        />
                                )
                                :   <li>
                                        <p>
                                            Nothing added to favorites.
                                        </p>
                                    </li>
                        }
                    </ul>
                </li>
                <li>
                    <h3>Watchlist</h3>
                    <ul>
                        {
                            watchlist.length > 0
                                ?   watchlist.map(e => 
                                        <Item
                                            key={`watchlist: ${e}`}
                                            text={e}
                                            listName="watchlist"
                                            deleteCallback={removeMovieFromList}
                                        />
                                )
                                :   <li>
                                        <p>
                                            Nothing added to watchlist.
                                        </p>
                                    </li>
                        }
                    </ul>
                </li>
                <li>
                    <h3>Completed</h3>
                    <ul>
                        {
                            completed.length > 0
                                ?   completed.map(e => 
                                        <Item
                                            key={`completed: ${e}`}
                                            text={e}
                                            listName="completed"
                                            deleteCallback={removeMovieFromList}
                                        />
                                    )
                                :   <li>
                                        <p>
                                            Nothing added to completed.
                                        </p>
                                    </li>
                        }
                    </ul>
                </li>
                <li>
                    <h3>Dropped</h3>
                    <ul>
                        {
                            dropped.length > 0
                                ?   dropped.map(e => 
                                        <Item
                                            key={`dropped: ${e}`}
                                            text={e}
                                            listName="dropped"
                                            deleteCallback={removeMovieFromList}
                                        />
                                    )
                                :   <li>
                                        <p>
                                            Nothing added to dropped.
                                        </p>
                                    </li>
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
}