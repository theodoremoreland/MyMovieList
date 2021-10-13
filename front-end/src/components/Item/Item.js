import './Item.css';

export default function Item({ text }) {
    return (
        <li
            className="item"
        >
            <p>{text}</p>
            <button className="deleteIcon">
                x
            </button>
        </li>
    );
  }