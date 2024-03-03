import illustration from "../assets/illustration-stay-productive.png";

import iconRight from "../assets/icon-arrow.svg";

const Productive = () => {
  return (
    <section className="productive">
      <div className="productive-illustration">
        <img src={illustration} alt="stay productive" />
      </div>
      <div className="productive-details">
        <h2 className="productive-title">Stay productive, wherever you are</h2>
        <p className="productive-text">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="productive-text">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className="productive-link">
          See how Fylo works
          <span>
            <img src={iconRight} alt="icon right" className="icon-right" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Productive;
