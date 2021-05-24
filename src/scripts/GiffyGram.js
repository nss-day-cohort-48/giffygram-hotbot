import { PostList } from "../scripts/feed/PostList.js";
import { MessageForm } from "./message/MessageForm.js";
import { Header } from "./nav/Header.js";


export const GiffyGram = () => {
  // Show main main UI
  return `

      ${Header()}

      ${MessageForm()}

    <div class="giffygram__feed">
    
      ${PostList()}

    </div>
    `;
};
