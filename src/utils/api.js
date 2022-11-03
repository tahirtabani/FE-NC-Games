import axios from "axios";

const api = axios.create({
  baseURL: "https://tahir-nc-games-back-end-api.herokuapp.com/api",
});

export function getReviews() {
  return api
    .get(`/reviews`, {
      params: {
        category,
        sort_by,
        order,
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
