import { getUsers, createNewUser } from "../data/provider.js";

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "registerButton") {
    // Get what the user typed into the form fields
    const newFullName = document.querySelector(
      "input[name='name']"
    ).value;
    const newEmail = document.querySelector(
      "input[name='email']"
    ).value;
    const newPassword = document.querySelector(
      "input[name='password']"
    ).value;

    const newUserFields = {
      fullName: newFullName,
      email: newEmail,
      password: newPassword,
    };

    createNewUser(newUserFields);
  }
});

export const RegistrationForm = () => {
  return `
          <div class="registrationForm">
          <form>
                <fieldset>
                    <label for="name">Name:</label>
                     <input type="text" name="name" autofocus placeholder="First and Last, please" />
                </fieldset>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Enter your Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Create a password" />
                </fieldset>
            </form>
              <button id="registerButton">Register Here!</button>
          </div>
      `;
};
