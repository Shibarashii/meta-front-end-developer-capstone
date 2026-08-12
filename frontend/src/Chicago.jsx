import Restaurant from './assets/restaurant.jpg';
const LittleLemonDescription = () => {
  return (
    <article>
      <h1 className="display-title color-primary-2"> Little Lemon </h1>
      <p className="subtitle color-secondary-3"> Chicago</p>
      <br />

      <p className="paragraph-text justify-text color-secondary-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </article>
  );
};

const Chicago = () => {
  return (
    <section className="about-section d-flex bg-primary-1">
      <div className="col">
        <LittleLemonDescription />
      </div>
      <div className="col justify-center align-center d-flex">
        <img
          src={Restaurant}
          alt="Photo of Little Lemon Restaurant"
          className="about-img"
        />
      </div>
    </section>
  );
};

export { LittleLemonDescription };
export default Chicago;
