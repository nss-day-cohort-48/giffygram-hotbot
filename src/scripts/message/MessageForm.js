import { getForm, getUsers, setForm } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const MessageForm = () => {
  const users = getUsers();
  const form = getForm();

  let html = "";

  if (form === false) {
    html = "";
  } else {
    html = `
    
        <div class="message">
        
            <select class="select--friends">
                <option>Select User</option>
                    ${users.map((users) => {
                      return `<option value="${users.id}">${users.fullName}</option>`;
                    })}
                
            </select>

            <textarea class="message__section" placeholder="Type Message Here" name="messageFormBody" type="text"></textarea>
            
            <button id="sendMessageId" class="sendMessageButton messageButton">Send</button>
            <button id="cancelMessageId" class="cancelMessageButton messageButton">Cancel</button>
            </div>
            `;
  }

  return html;
};

applicationElement.addEventListener("click", (messageClick) => {
  if (messageClick.target.id === "cancelMessageId") {
    setForm();
  }
});
