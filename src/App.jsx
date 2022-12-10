import "./App.css";
import REACTLOGO from "./logo.png";
import Title from "./components/Title/title";
import Layout from "./components/Sidebar/sidebar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ReviewsPage from "./components/Reviews/reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Home/home";
import "./components/Home/home.css";
import CategoriesPage from "./components/Categories/categories";
import SingleCategoriesPage from "./components/SingleCategory/singleCategory";
import SingleReview from "./components/SingleReview/singleReview";
import "./components/SingleReview/singleReview.css";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="MainPage">
      <Title />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/reviews/categories/:category"
          element={<SingleCategoriesPage />}
        />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
