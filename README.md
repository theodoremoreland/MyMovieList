# condescending_broholmer 

Project:
* Build a front-end web app that allows users to list, search, add, edit and delete movies using the libraries and frameworks of your choice.
* Pre-populate the app with the below linked CSV of movie data. This does not need to be stored in a database or API, but we'll leave it up to you to decide how to set up the data.
* Add tests
* Host this site somewhere accessible by our team
* Additional functionality that you would like to demonstrate

# MyMovieList (actual name pending)

What does your taste in movies say about you? No, this isn't a BuzzFeed article or an online quiz. 
MyMovieList is a platform for creating your own Movie Profile. Your profile can be used to express your exquisite taste
and find other people of a similarly refined palate.

### Features
- Create a user profile
    - Username
    - Profile Pic
    - Location
    - Watchlist
    - Completed
    - Dropped
    - Favorites
- Browse Movies
- Search Movies
- Filter Movies
- Add Movies to list (watchlist, completed, dropped, favorites)
- People search
    - Near you
    - Like Minded
    - Organizations

### Inspiration(s)
- https://myanimelist.net
- https://open.spotify.com

- Views
    - Users List // Card, Pills, Page Lip
    - Movies List // Card, Pills, Page Lip
        randomized by default
        search bar
        filter pills (watchlist, completed, dropped, favorites)
    - Movie // Banner, Page Lip
        Release Year
        Title
        Origin/Ethnicity
        Director
        Cast
        Genre
        Wiki Page
        Plot
    - User // Banner, Page Lip

Storage
- RDS
    Loads random subset of movies for list
 - LocalStorage
    Loads a default / fake profile before implementing localStorage version# MyMovieList
