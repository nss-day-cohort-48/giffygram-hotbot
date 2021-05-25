import { getPosts, createNewPost } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram");

export const PostList = () => {
  const posts = getPosts();

  let html = "";

  for (const post of posts) {
    html += `
      <div class="post">  
      <h3>${post.title}</h3> 
      <img class="post__image" src="${post.url}" alt="A very cool turtle team" />
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
