import MovieCard from "../components/MovieCard";

function MoviesList() {
  return (
    <>
      <div className="container">
        <h2>Movies List</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
          <div className="col">
            <MovieCard />
          </div>
          <div className="col">
            <MovieCard />
          </div>
          <div className="col">
            <MovieCard />
          </div>
          <div className="col">
            <MovieCard />
          </div>
          <div className="col">
            <MovieCard />
          </div>
          <div className="col">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviesList;
