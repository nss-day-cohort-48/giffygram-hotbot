import {
  getPosts,
  createNewPost,
  setSubmitPost,
  getUsers
} from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram");

export const PostList = () => {
  const posts = getPosts();
  const users = getUsers();

  let html = "";

  for (const post of posts) {
    html += `
      <div class="post newPost__drop">  
      <h3>${post.title}</h3> 
      <img class="post__image" src="${
        post.url
      }" alt="Uh oh! Looks like there's something wrong with that URL." />
      <p class="post__tagline">${post.description}</p>
      <p class="post__author">Posted by ${
        users.find((user) => {
          if (post.userId === user.id) {
            return true;
          }
          return false;
        }).fullName

      } at ${post.timestamp} </p>

  
      </div>
    `;
  } 

  return html;
};



applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "newPost__submit") {
    // Get what the user typed into the form fields
    const titleHere = document.querySelector(
      "input[name='postTitle']"
    ).value;
    const urlHere = document.querySelector(
      "input[name='postURL']"
    ).value;
    const descriptionHere = document.querySelector(
      "textarea[name='postDescription']"
    ).value;
    const submittingUser = localStorage.getItem("gg_user");

    const newPostFields = {
      title: titleHere,
      url: urlHere,
      description: descriptionHere,
      timestamp:
        new Date().toLocaleTimeString() +
        " on " +
        new Date().toLocaleDateString(),
      isFavorited: false,
      userId: parseInt(submittingUser),
    };

    // Definte objects

    createNewPost(newPostFields);
    setSubmitPost();
  }
});

// For miniMode: You need to hide it!
// document.getElementById('welcomeDiv').style.display = "block";

// else if (
//  clickEvent.target.class === "newPost__input"
// titleHere.length ||
// urlHere.length ||
// descriptionHere.length === 0
// ) {
//   window.alert(
//     "Hey BRO, you need to fill in all the forms to submit a new post!"
//   );
// }
