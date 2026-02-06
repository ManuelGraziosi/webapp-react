import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesList() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect((resp) => {
    axios
      .get("http://localhost:3000/api/movies")
      .then(function (resp) {
        // handle success
        console.log(resp.data.movies);
        setMoviesList(resp.data.movies);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2>Movies List</h2>
        {moviesList === null ? (
          <h3>null...</h3>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
            {moviesList.map((curMovie) => (
              <div className="col" key={curMovie.id}>
                <MovieCard movie={curMovie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MoviesList;
