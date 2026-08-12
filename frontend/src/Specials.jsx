import { Button } from './CallToAction';
import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemonDessert from './assets/lemon dessert.jpg';

const MenuItem = ({ image, alt, dish, description, price }) => {
  return (
    <article className="menu-item d-flex-column">
      <img src={image} alt={alt} className="menu-img" />

      {/* Details */}
      <div className="menu-details d-flex-column bg-secondary-3">
        <div className="d-flex justify-between">
          <div className="col">
            <p className="lead-text">{dish}</p>
          </div>
          <div className="col">
            <p className="lead-text red align-right-text">${price}</p>
          </div>
        </div>

        <p className="menu-description paragraph-text justify-text">
          {description}
        </p>
        <p className="section-categories"> Order for Delivery</p>
      </div>
    </article>
  );
};
const Specials = () => {
  return (
    <section className="d-flex-column">
      <div className="d-flex justify-between">
        <h1 className="display-title"> Specials</h1>
        <Button text="Order" />
      </div>
      <br />

      <div className="menu-container d-flex justify-center align-center">
        <MenuItem
          image={greekSalad}
          alt="Greek Salad Photo"
          dish="Greek Salad"
          price="12.83"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <MenuItem
          image={bruchetta}
          alt="Bruchetta Photo"
          dish="Bruchetta"
          price="5.89"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <MenuItem
          image={lemonDessert}
          alt="Lemon Dessert Photo"
          dish="Lemon Dessert"
          price="5.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
};

export default Specials;
