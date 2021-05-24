import { PostList } from "../scripts/feed/PostList.js";
import { Header } from "./nav/Header.js";

const applicationElement = document.querySelector(".giffygram");

export const GiffyGram = () => {
  // Show main main UI
  return `

      ${Header()}
      

    <div class="giffygram__feed">
      
      ${PostList()}

    </div>
    `;
};
