import { PostList } from "../scripts/feed/PostList.js";

const applicationElement = document.querySelector(".giffygram");
export const GiffyGram = () => {
  // Show main main UI
  return `<h1>Giffygram</h1>
    ${PostList()}
    `;
};
