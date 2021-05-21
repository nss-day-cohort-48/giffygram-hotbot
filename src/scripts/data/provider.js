const apiURL = "http://localhost:3000";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  users: [],
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
  posts: [],
  userPosts: [],
  favorites: [],
  messages: [],
  userMessages: [],
};

export const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((res) => res.json())
    .then((usersResponse) => {
      applicationState.users = usersResponse;
    });
};

export const getUsers = () => {
  return [...applicationState.users];
};

export const fetchPosts = () => {
  return fetch(`${apiURL}/posts`)
    .then((res) => res.json())
    .then((postResponse) => {
      applicationState.posts = postResponse;
    });
};

export const getPosts = () => {
  return [...applicationState.posts];
};
