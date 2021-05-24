// import { Pen } from "./MessagePen.js"

import { LoginForm } from "../auth/Login.js";

const applicationElement = document.querySelector(".giffygram");

export const Header = () => {
    return `
        <header class="navigation">
        <img src="../images/hotbot.png" class="navigation__icon">
            <h1>
                HotBotGram
            </h1>
              
            <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">

                
                <div class="navigation__logout">
                    <button  id="logout" class="logoutButton">LOGOUT</button>
                </div>
        </header>
    
    `
}

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