import "./Popup.css";

function Popup({ show, title, message, xp, onClose }) {

  if (!show) return null;

  return (

    <div className="popup-overlay">

      <div className="popup">

        <div className="popup-icon">
          🎉
        </div>

        <h2>{title}</h2>

        <p>{message}</p>

        <h3>⭐ +{xp} XP</h3>

        <button onClick={onClose}>
          Continue →
        </button>

      </div>

    </div>

  );

}

export default Popup;