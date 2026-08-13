const ConfirmedBooking = () => {
  return (
    <main>
      <section className="bg-primary-1 d-flex-column align-center center-text">
        <h1 className="display-title color-primary-2">Booking Confirmed!</h1>
        <p className="subtitle color-secondary-3">Your reservation has been successfully submitted.</p>
      </section>

      <section className="d-flex justify-center align-center">
        <div className="bg-secondary-3 d-flex-column align-center center-text confirmed-card">
          <p className="lead-text color-primary-1">
            We look forward to welcoming you at Little Lemon!
          </p>
        </div>
      </section>
    </main>
  );
};

export default ConfirmedBooking;

