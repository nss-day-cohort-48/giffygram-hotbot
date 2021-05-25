import { getPosts, createNewPost } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram");

export const PostList = () => {
  const posts = getPosts();

  let html = "";

  for (const post of posts) {
    html += `
      <div class="post">  
      <h3>${post.title}</h3> 
      <img class="post__image" src="${post.url}" alt="Uh oh! Looks like there's something wrong with that URL." />
      <p class="post__tagline">${post.description}<p>
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

    const newPostFields = {
      title: titleHere,
      url: urlHere,
      description: descriptionHere,
      timestamp:
        new Date().toLocaleTimeString() +
        " | " +
        new Date().toLocaleDateString(),
      isFavorited: false,
    };

    createNewPost(newPostFields);
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
