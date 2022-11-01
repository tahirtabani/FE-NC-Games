import axios from "axios";

const api = axios.create({
  baseURL: "https://tahir-nc-games-back-end-api.herokuapp.com/api",
});

export function getReviews() {
  return api.get(`/reviews`).then(({ data }) => {
    return data.reviews;
  });
}
