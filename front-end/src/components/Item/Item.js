import './Item.css';

export default function Item({ listName, text, deleteCallback }) {
    return (
        <li
            className="item"
        >
            <p>{text}</p>
            <button
                className="deleteIcon"
                onClick={(e) => deleteCallback(e, listName, text)}
            >
                x
            </button>
        </li>
    );
  }