import { LittleLemonDescription } from './Chicago';
import RestaurantFood from './assets/restauranfood.jpg';

const Button = ({ text }) => {
  return <button className="call-to-action-button"> {text} </button>;
};

const CallToAction = () => {
  return (
    <section className="bg-primary-1 d-flex">
      <div className="col d-flex-column gap-5">
        <LittleLemonDescription />
        <br />
        <Button text="Reserve A Table" />
      </div>
      <div className="col justify-center align-center d-flex">
        <img
          src={RestaurantFood}
          alt="Hero Image depicting food."
          className="hero-img"
        />
      </div>
    </section>
  );
};

export { Button };
export default CallToAction;
