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

// Context
import MoviesProvider from "./contexts/MoviesContext";

// Views
import MovieListView from './views/MovieList/MovieList.view';
import MovieView from './views/Movie/Movie.view';
import UserListView from './views/UserList/UserList.view';
import UserView from './views/User/User.view';

// Components
import Menu from './components/Menu/Menu';

export default function App() {
    return (
        <main className="App">
            <HashRouter>
                <Menu />
                <div className="content">     
                    <Switch>
                        <MoviesProvider>
                            <Route path="/movie" component={MovieView} />
                            <Route path="/movie-list" component={MovieListView} />
                            <Route path="/user" component={UserView} />
                            <Route path="/user-list" component={UserListView} />
                            <Redirect from='/' to="/movie-list" />
                        </MoviesProvider>
                    </Switch>
                </div>          
            </HashRouter>
        </main>
    );
}