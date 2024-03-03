import heroImg from "../assets/illustration-intro.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img-container">
        <img src={heroImg} alt="hero illustration" className="hero-img" />
      </div>
      <div className="hero-container">
        <h1 className="hero-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="hero-text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a href="#" className="btn btn--primary">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
