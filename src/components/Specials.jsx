function Specials() {
    return (
      <section className="specials">
        <div className="specials-header">
          <h2>This Week’s Specials!</h2>
          <button>Online Menu</button>
        </div>
        <article className="specials-list">
          {/* You can map 3 dishes here later */}
          <div className="card">Dish 1</div>
          <div className="card">Dish 2</div>
          <div className="card">Dish 3</div>
        </article>
      </section>
    );
  }

  export default Specials;
