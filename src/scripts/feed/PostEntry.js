import { createNewPost } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram");

// applicationElement.addEventListener("click", (clickEvent) => {
//   if (clickEvent.target.id === "newPost__submit") {
//     const titleHere = document.querySelector(
//       "input[name='postTitle']"
//     ).value;
//     const urlHere = document.querySelector(
//       "input[name='postURL']"
//     ).value;
//     const descriptionHere = document.querySelector(
//       "input[name='postDescription']"
//     ).value;

//     const newPostFields = {
//       title: titleHere,
//       url: urlHere,
//       description: descriptionHere,
//     };

//     createNewPost(newPostFields);
//   }
// });
