import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
