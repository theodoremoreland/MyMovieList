// React
import { useEffect, useState } from 'react';

// Styles
import './UserList.view.css';

// Controllers
import { init } from './UserList.controller';

// Components
import Card from '../components/Card';

export default function UserListView() {
    const [username, setUsername] = useState("");
    const [pic, setPic] = useState("");

    useEffect(() => {
        init();

        const {
            username,
            pic
        } = JSON.parse(localStorage.getItem("profile"));

        setUsername(username);
        setPic(pic);
    }, []);

    return (
    <div className="userListView">
        <h4>Just you</h4>
        <Card title={username} pic={pic} />
    </div>
    );
}