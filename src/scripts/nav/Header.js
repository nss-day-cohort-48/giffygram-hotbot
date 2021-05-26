// import { Pen } from "./MessagePen.js"

import { LoginForm } from "../auth/Login.js";
import { setForm } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const Header = () => {
  return `
        <header class="navigation">
          
            <img src="../images/hotbot.png" class="navigation__icon navigation__item">
          
            <h1 class="navigation__name navigation__item">
                HotBotGram
            </h1>
              
                <img id="directMessageIcon" class="navigation__item" src="/images/fountain-pen.svg" alt="Direct message">
            
                <div class="notification__count navigation__item">
                0
                </div>

                <div class="navigation__logout navigation__item">
                    <button  id="logout" class="logoutButton ">LOGOUT</button>
                </div>
        </header>
    
    `;
};

//click listener with MessageForm() in condition
applicationElement.addEventListener("click", (messageClick) => {
  if (messageClick.target.id === "directMessageIcon") {
    setForm();
  }
});

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logout") {
    localStorage.removeItem("gg_user");
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
  }
  return LoginForm();
});
//event listener, when click logout, remove user from local storage, re-render login HTML
