// React
import { useEffect, useState, useRef } from 'react';

// Styles
import './UserList.view.css';

// Controllers
import { init } from './UserList.controller';

// Components
import Card from '../../components/Card/Card';

export default function UserListView() {
    const [username, setUsername] = useState("");
    const [pic, setPic] = useState("");
    const containerRef = useRef();

    useEffect(() => {
        containerRef.current.scrollTo(0, 0); // Scroll to top of page.
        init();

        const {
            username,
            pic
        } = JSON.parse(localStorage.getItem("profile"));

        setUsername(username);
        setPic(pic);
    }, []);

    return (
    <div className="userListView" ref={containerRef}>
        <h4>Just you</h4>
        <Card title={username} pic={pic} shape="circle"/>
    </div>
    );
}