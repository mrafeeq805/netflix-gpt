export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PHOTO_URL = "https://avatars.githubusercontent.com/u/146195363?s=400&v=4"
export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };
export const URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const CARD_IMG = 'https://image.tmdb.org/t/p/w500/'
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY

export const SUPPORTED_LANGUAGES = [
  {
    identifier:"en",
    name : "English"
  },
  {
    identifier:"hindi",
    name : "Hindi"
  },
  {
    identifier:"spanish",
    name : "Spanish"
  },
]