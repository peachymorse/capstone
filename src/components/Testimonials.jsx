import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Maria Sanchez',
    rating: 5,
    image: '/assets/testimonial1.jpg',
    review: 'Amazing food and delightful service. Would definitely come again!',
  },
  {
    name: 'Liam Patel',
    rating: 4,
    image: '/assets/testimonial2.jpg',
    review: 'The lemon dessert blew my mind. Very clean and cozy atmosphere!',
  },
  {
    name: 'Ava Nguyen',
    rating: 5,
    image: '/assets/testimonial3.jpg',
    review: 'Little Lemon feels like home. Their Greek salad is top-tier.',
  },
  {
    name: 'Daniel Okafor',
    rating: 4,
    image: '/assets/testimonial4.jpg',
    review: 'Friendly staff and great Mediterranean vibes.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        {testimonialsData.map((person, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">⭐️ {person.rating}</div>
            <div className="testimonial-image">
              <img src={person.image} alt={person.name} loading="lazy" />
            </div>
            <h4 className="testimonial-name">{person.name}</h4>
            <p className="testimonial-review">"{person.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

