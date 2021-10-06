// Styles
import './Banner.css';

export default function Banner({ title, pic, subtitle, handleTitleChange, handleSubtitleChange, update }) {
  return (
    <div className="banner">
        <img id="bannerImage" src={pic} alt={title} />
        <div className="inputContainer">
            <input id="title" value={title} onChange={e => handleTitleChange(e)} />
            <input id="subtitle" value={subtitle} onChange={e => handleSubtitleChange(e)} />
            <button
                onClick={() => update()}
            >
                Update
            </button>
        </div>
    </div>
  );
}