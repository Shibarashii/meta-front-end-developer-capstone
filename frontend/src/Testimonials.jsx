import person from './assets/person.png';

const TestimonialItem = ({ rating, review, img, alt }) => {
  return (
    <article className="testimonial-item d-flex-column bg-secondary-3 justify-center align-center">
      <p className="section-title color-primary-1">{rating}</p>
      <img src={img} alt={alt} className="testimonial-img" />
      <p className="paragraph-text center-text color-primary-1"> {review} </p>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonial-section d-flex-column bg-secondary-4">
      <div className="d-flex justify-center align-center">
        <h1 className="display-title color-secondary-3">Testimonials</h1>
      </div>
      <div className="testimonials-container d-flex justify-center">
        <TestimonialItem
          rating="5/5"
          review="Lorem ipsum"
          img={person}
          alt="Photo"
        />

        <TestimonialItem
          rating="5/5"
          review="Lorem ipsum"
          img={person}
          alt="Photo"
        />

        <TestimonialItem
          rating="5/5"
          review="Lorem ipsum"
          img={person}
          alt="Photo"
        />

        <TestimonialItem
          rating="5/5"
          review="Lorem ipsum"
          img={person}
          alt="Photo"
        />
      </div>
    </section>
  );
};

export default Testimonials;
