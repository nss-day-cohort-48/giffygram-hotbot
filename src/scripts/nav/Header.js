// import { Pen } from "./MessagePen.js"

export const Header = () => {
    return `
        <header class="navigation">
        <img src="../images/hotbot.png" class="navigation__icon">
            <h1>
                HotBotGram
            </h1>
                
            
                
                <div class="navigation__logout">
                    <button class="logoutButton">LOGOUT</button>
                </div>
        </header>
    
    `
}

//event listener, when click logout, remove user from local storage, re-render login HTML