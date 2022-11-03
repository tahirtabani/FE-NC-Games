import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function HomePage() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [reviews, setReviews] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviews().then((response) => {
      setReviews(response);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <h3>...loading</h3>;
  return (
    <>
      <img
        className="w-full h-[auto] object-cover"
        src="https://www.pngitem.com/pimgs/m/12-126050_gaming-week-in-review-poster-hd-png-download.png"
        alt="Game Reviews Home Page"
      />
      <h2 className="headingHome"> Check out our latest reviews below!</h2>
      <div className="relative flex items=center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 "
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {reviews.slice(0, 10).map((review) => (
            <a
              href={`https://tahir-nc-games-back-end-api.herokuapp.com/api/reviews/${review.review_id}`}
            >
              <img
                className="w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={review.review_img_url}
                alt="review images"
              />
            </a>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 "
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}
