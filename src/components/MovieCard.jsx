function MovieCard() {
  return (
    <>
      <div className="card">
        <img
          src="https://picsum.photos/800"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Movie title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go to movie details
          </a>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
