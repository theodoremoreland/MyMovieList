// React
import React from 'react';
import { 
    HashRouter, 
    Route, 
    Redirect, 
    Switch 
} from 'react-router-dom';

// Styles
import './reset.css';
import './App.css';

// Views
import MovieListView from './views/MovieList.view';
import MovieView from './views/Movie.view';
import UserListView from './views/UserList.view';
import UserView from './views/User.view';

// Components
import Menu from './components/Menu';

export default function App() {
    return (
        <main className="App">
            <HashRouter>
                <Menu />
                <div className="content">     
                    <Switch>
                        <Route path="/movie" component={MovieView} />
                        <Route path="/movie-list" component={MovieListView} />
                        <Route path="/user" component={UserView} />
                        <Route path="/user-list" component={UserListView} />
                        <Redirect from='/' to="/movie-list" />
                    </Switch>
                </div>          
            </HashRouter>
        </main>
    );
}