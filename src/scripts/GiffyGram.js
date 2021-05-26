import { PostList } from "../scripts/feed/PostList.js";
import { submitPostFields } from "../scripts/feed/NewPost.js";
import { MessageForm } from "./message/MessageForm.js";
import { Footer } from "./nav/Footer.js";
import { Header } from "./nav/Header.js";

export const GiffyGram = () => {
  // Show main main UI
  return `

      ${Header()}
      
      ${MessageForm()}

    <section class="giffygram__feed">
    ${submitPostFields()}
    ${PostList()}

    </div>
    ${Footer()}
    `;
};
