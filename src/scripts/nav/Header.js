// import { Pen } from "./MessagePen.js"

import { LoginForm } from "../auth/Login.js";
import { MessageForm } from "../message/MessageForm.js";

const applicationElement = document.querySelector(".giffygram");

export const Header = () => {
    return `
        <header class="navigation">
        <img src="../images/hotbot.png" class="navigation__icon ">
            <h1 class="navigation__icon">
                HotBotGram
            </h1>
              
                <img id="directMessageIcon"  src="/images/fountain-pen.svg" onclick alt="Direct message">
            
                <div class="notification__count">
                0
                </div>

                <div class="navigation__logout">
                    <button  id="logout" class="logoutButton ">LOGOUT</button>
                </div>
        </header>
    
    `
}

//click listener with MessageForm() in condition
applicationElement.addEventListener("click", (messageClick) => {
    if (messageClick.target.id === "directMessageIcon") {
        
    }
})


applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "logout") {
        localStorage.removeItem("gg_user")
        document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    } 
    return LoginForm()
})
//event listener, when click logout, remove user from local storage, re-render login HTML