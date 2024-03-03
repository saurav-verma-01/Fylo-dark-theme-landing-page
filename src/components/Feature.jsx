const Feature = ({ icon, title, text }) => {
  return (
    <div className="feature">
      <div className="icon-box">
        <img src={icon} alt={title} className="feature-icon" />
      </div>
      <h2 className="feature-title">{title}</h2>
      <p className="feature-text">{text}</p>
    </div>
  );
};

export default Feature;
