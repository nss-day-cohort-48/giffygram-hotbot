import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { fetchPosts, fetchUsers } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers()
    .then(() => {
      const user = parseInt(localStorage.getItem("gg_user"));

      if (user) {
        applicationElement.innerHTML = GiffyGram();
      } else {
        applicationElement.innerHTML = LoginForm();
      }
    })
    .then(fetchPosts());
};

applicationElement.addEventListener("stateChanged", () => {
  renderApp();
});

renderApp();
