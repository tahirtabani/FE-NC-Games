import "./App.css";
import REACTLOGO from "./logo.png";
import Title from "./components/Title/title";
import Layout from "./components/Sidebar/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewsPage from "./components/Reviews/reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Home/home";
import "./components/Home/home.css";
import CategoriesPage from "./components/Categories/categories";

function App() {
  return (
    <div>
      <Title />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
