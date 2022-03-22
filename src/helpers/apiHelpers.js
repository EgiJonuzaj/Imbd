import axios from "axios";

const URL =
  "https://imdb-api.com/API/AdvancedSearch/k_12345678?groups=top_250&count=250";
const getUrl = ({ title, date }) => {
  const titleSearchQuery = title && title.length >= 3 ? `&title=${title}` : "";
  console.log(date)
  const releaseDateQuery = date ? `&release_date=${date}` : "";
  return `${URL}${titleSearchQuery}${releaseDateQuery}`;
};
export const getMoviesFnc = async (payload) => {
  const response = await axios
    .get(getUrl(payload))
    .then(function (response) {
      if (response) {
        return response.data.results ?? [];
      }
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

  return response;
};
