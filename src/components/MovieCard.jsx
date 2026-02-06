import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={movie.image}
        className="card-img-top"
        alt={movie.title}
        style={{ objectFit: "cover", height: "300px" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>

        <h6 className="card-subtitle mb-2 text-muted">
          {movie.release_year} · {movie.genre}
        </h6>

        <p className="card-text flex-grow-1">{movie.abstract}</p>

        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item px-0">
            <strong>Director:</strong> {movie.director}
          </li>
          <li className="list-group-item px-0">
            <strong>Average Vote:</strong> {movie.avg_vote} / 5
          </li>
        </ul>
        <Link className="btn btn-primary" to={`/movies/${movie.id}`}>
          Vai ai dettagli
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
