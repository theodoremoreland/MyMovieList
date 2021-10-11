export const addToLocalStorage = (listName, movie) => {
    let listItems = JSON.parse(localStorage.getItem(listName)) || [];
    listItems = Array.from(
        new Set([...listItems, movie])
    );

    localStorage.setItem(listName, JSON.stringify(listItems));
}