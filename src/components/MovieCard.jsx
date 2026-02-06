function MovieCard({ movie }) {
  return (
    <>
      <div className="card">
        <img src={movie.image} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.abstract}</p>
          <p className="card-text">Average vote: {movie.avg_vote}</p>
          <a href="#" className="btn btn-primary">
            slug: {movie.slug}
          </a>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
