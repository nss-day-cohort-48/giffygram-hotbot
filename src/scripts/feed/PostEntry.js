import { createNewPost } from "../data/provider.js";

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitButton") {
    // Get what the user typed into the form fields
    const titleHERE = document.querySelector(
      "input[name='partyParentsName']"
    ).value;
    const urlHERE = document.querySelector(
      "input[name='partyLastName']"
    ).value;

    const newPostFields = {
      title: titleHERE,
      url: urlHERE,
      description: hmmmm,
      timestamp: hmmm,
    };

    createNewPost(newPostFields);
  }
});
