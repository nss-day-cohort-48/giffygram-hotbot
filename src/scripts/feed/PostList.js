import { getPosts } from "../data/provider.js";

export const PostList = () => {
  const posts = getPosts();
  let html = `
  <section class="postList">
      
  </section>
  `;

  for (const post of posts) {
    return (html += `
      <div class="post">  
    ${post.title}
      <img class="postImage" src="${post.URL}" alt="A very cool turtle team" />
      ${post.description}
      </div>
    `);
  }

  console.log(JSON.stringify(posts));
  return html;
};
