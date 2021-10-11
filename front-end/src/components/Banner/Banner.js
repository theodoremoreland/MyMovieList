// Styles
import './Banner.css';

export default function Banner({ title, pic, imgType, subtitle, isMutable, handleTitleChange, handleSubtitleChange, update }) {
  return (
    <div className="banner">
        <img id="bannerImage" className={`${imgType}`} src={pic} alt={title} />
        <div className="inputContainer">
            {
                isMutable
                    ?   <>
                            <input id="title" value={title} onChange={e => handleTitleChange(e)} />
                            <input id="subtitle" value={subtitle} onChange={e => handleSubtitleChange(e)} />
                            <button
                                onClick={() => update()}
                            >
                                Update
                            </button>
                        </>
                    :   <>
                            <h1 id="title">
                                {title}
                            </h1>
                            <p id="subtitle">
                                {subtitle}
                            </p>
                        </>
            }
        </div>
    </div>
  );
}