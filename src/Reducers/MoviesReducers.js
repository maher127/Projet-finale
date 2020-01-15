import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../Actions/Type";
import uuid from "uuid";
const intialState = [
  {
    id: uuid(),
    name: "Inception",
    rating: 4,
    image: "https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg",
    year: 2010
  },
  {
    id: uuid(),
    name: "Spider-Man: Far From Home",
    rating: 1,
    image:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1556641392/amc-cdn/production/2/movies/52700/52667/PosterDynamic/76007.jpg",
    year: 2014
  },
  {
    id: uuid(),
    name: "star wars",
    image:
      "data:image/jpeg;base64,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",
    rating: 4
  },
  {
    id: uuid(),
    name: "John Wick 3",
    rating: 5,
    image:
      "data:image/jpeg;base64,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",

    year: 2015
  }
];
const MoviesReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.newMovie];

    case DELETE_MOVIE:
      return state.filter(movie => movie.id !== action.id);

    case EDIT_MOVIE:
      return state.map(movie =>
        movie.id === action.updatedMovie.id ? action.updatedMovie : movie
      );
    default:
      return state;
  }
};
export default MoviesReducer;
