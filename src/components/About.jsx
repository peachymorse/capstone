import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="about-images">
          <img src="/assets/Mario and Adrian A.jpg" alt="Chef Adrian" className="image-top" loading="lazy" />
          <img src="/assets/Mario and Adrian b.jpg" alt="Chef Mario" className="image-bottom" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default About;

