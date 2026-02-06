import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div className="container">
      <h2>HOME</h2>

      {/* HERO SECTION */}
      <div
        className="vh-100 d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        {/* <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        /> */}

        {/* Content */}
        <div className="position-relative container">
          <h1 className="display-4 fw-bold mb-3">
            Benvenuto sul tuo sito preferito dei film 🎬
          </h1>
          <p className="lead">
            Scopri i migliori film, i grandi classici e le ultime uscite
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
