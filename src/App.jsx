import "./App.css";
import REACTLOGO from "./logo.png";
import Title from "./components/Title/title";
import Layout from "./components/Sidebar/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewsPage from "./components/Reviews/reviews";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <img id="logo" src={REACTLOGO} alt="Logo" />
      <Title />
      <Layout />
      <Routes>
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
