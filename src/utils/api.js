import axios from "axios";

const api = axios.create({
  baseURL: "https://tahir-nc-games-back-end-api.herokuapp.com/api",
});

export function getReviews(category) {
  return api
    .get(`/reviews`, {
      params: {
        category,
      },
    })
    .then(({ data }) => {
      return data.reviews;
    });
}

export function getCategories() {
  return api.get("/categories").then(({ data }) => {
    return data.categories;
  });
}

export function getReviewById(review_id) {
  return api.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
}

export const patchVotes = (review_id, votes) => {
  return api.patch(`/reviews/${review_id}`, votes).then(({ data }) => {
    return data.reviews;
  });
};
