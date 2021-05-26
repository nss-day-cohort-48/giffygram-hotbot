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
  showForm: false,
  submitPost: false,
};

// ------------------- USERS -------------------

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

export const createNewUser = (newUser) => {
  const fetchUsers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  };

  return fetch(`${apiURL}/users`, fetchUsers)
    .then((res) => res.json())
    .then(() => {
      applicationElement.dispatchEvent(
        new CustomEvent("stateChanged")
      );
    });
};

// ------------------- POSTS -------------------

export const fetchPosts = () => {
  return fetch(`${apiURL}/posts`)
    .then((res) => res.json())
    .then((postResponse) => {
      applicationState.posts = postResponse;
    });
};

export const getPosts = () => {
  const filteredPosts = applicationState.posts.sort((c, n) => {
    const currentTime = c.timestamp.split("|")[1];
    const nextTime = n.timestamp.split("|")[1];

    const parsedCurrentTime = Date.parse(currentTime);
    const parsedNextTime = Date.parse(nextTime);

    return parsedNextTime - parsedCurrentTime;
  });

  return filteredPosts;
};

export const createNewPost = (newPost) => {
  const fetchPosts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };

  return fetch(`${apiURL}/posts`, fetchPosts)
    .then((res) => res.json())
    .then(() => {
      applicationElement.dispatchEvent(
        new CustomEvent("stateChanged")
      );
    });
};

// ------------------- MESSAGE FORM -------------------

export const setForm = () => {
  applicationState.showForm = !applicationState.showForm;
  applicationElement.dispatchEvent(
    new CustomEvent("stateChanged")
  );
};

export const getForm = () => {
  return applicationState.showForm;
};

// ------------------- SUBMIT BUTTON -------------------

export const setSubmitPost = () => {
  applicationState.submitPost = !applicationState.submitPost;
  applicationElement.dispatchEvent(
    new CustomEvent("stateChanged")
  );
};

export const getSubmitFields = () => {
  return applicationState.submitPost;
};
