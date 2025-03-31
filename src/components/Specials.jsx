import './Specials.css';

const specialsData = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'A crispy lettuce, peppers, olives, and feta cheese. Garnished with crunchy garlic croutons.',
    image: '/assets/greek%20salad.jpg',
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Grilled bread topped with garlic, tomatoes, olive oil, and basil.',
    image: '/assets/bruchetta.svg',
  },
  {
    title: 'Lemon Dessert',
    price: '$4.99',
    description: 'Authentic homemade Italian lemon cake. Light, fluffy, and zesty.',
    image: '/assets/lemon%20dessert.jpg',
  },
];


function Specials() {
  return (
    <section className="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2>This Weeks Specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="specials-cards">
          {specialsData.map((dish, index) => (
            <div className="special-card" key={index}>
              <img src={dish.image} alt={dish.title} loading="lazy" />
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3>{dish.title}</h3>
                  <span className="price">{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <a href="" className="delivery-link">
                  Order a delivery 🚚
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;

