import { getUsers } from "../data/provider.js";
import { renderApp } from "../main.js";
import { RegistrationForm } from "./Register.js";

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "loginButton") {
    let foundUser = null;
    const userState = getUsers();

    const email = document.querySelector(
      "input[name='loginEmail']"
    ).value;
    const password = document.querySelector(
      "input[name='loginPassword']"
    ).value;

    for (const user of userState) {
      if (user.email === email && user.password === password) {
        foundUser = user;
      }
    }

    if (foundUser !== null) {
      localStorage.setItem("gg_user", foundUser.id);
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    } else {
      window.alert(`Account does not exist!`);
      renderApp();
    }
  }
});

export const LoginForm = () => {
  return `
        <div class="loginForm">
        <h2>Welcome to HotBotGram! Please log in with your credentials to get moving.</h2>
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="loginEmail" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="loginPassword" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        </div>
        ${RegistrationForm()}
    `;
};
