import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then(function (resp) {
        // handle success
        console.log(resp.data.movieWithReviews);
        setMovie(resp.data.movieWithReviews);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return !movie ? (
    <div>dati mancanti/in arrivo</div>
  ) : (
    <div className="container py-5">
      <h2>Movie Details</h2>
      <div className="row g-5">
        {/* Poster */}
        <div className="col-md-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Dettagli */}
        <div className="col-md-8">
          <h1 className="mb-2">{movie.title}</h1>

          <div className="mb-3">
            <span className="badge bg-primary me-2">{movie.genre}</span>
            <span className="badge bg-secondary me-2">
              {movie.release_year}
            </span>
            <span className="badge bg-info text-dark">
              ⭐ {movie.avg_vote} / 5
            </span>
          </div>

          <p className="lead">{movie.abstract}</p>

          <hr />

          <div className="row">
            <div className="col-12 mb-3">
              <h6 className="text-muted">Director</h6>
              <p className="mb-0">{movie.director}</p>
            </div>

            <div className="col-sm-6 mb-3">
              <h6 className="text-muted">Created at</h6>
              <p className="mb-0">{movie.created_at}</p>
            </div>

            <div className="col-sm-6 mb-3">
              <h6 className="text-muted">Last update</h6>
              <p className="mb-0">{movie.updated_at}</p>
            </div>
          </div>

          <hr />

          <div className="d-flex gap-2">
            <Link className="btn btn-outline-secondary" to={"/movies"}>
              ← Back
            </Link>
            <Link
              className="btn btn-primary"
              to={`https://www.youtube.com/results?search_query=${movie.title}`}
            >
              Watch Trailer
            </Link>
          </div>
          <div>RECENSIONI</div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2">
            {movie.reviews.map((curReview) => (
              <div className="col">
                <ReviewCard review={curReview} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
