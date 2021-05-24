import { getPosts } from "../data/provider.js";

export const PostList = () => {
  const posts = getPosts();
  let html = `
  <section class="postList">
      
  </section>
  `;

  for (const post of posts) {
  html += `
      <div class="post ">  
    <h3>${post.title}</h3> 
      <img class="post__image" src="${post.URL}" alt="A very cool turtle team" />
      <p>${post.description}<p>
      </div>
    ` 
  }

  
  return html;
};
