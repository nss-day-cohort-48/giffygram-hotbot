import { getForm } from "../data/provider.js";


export const MessageForm = () => {

    const form = getForm()

    let html = ""

    if (form === false) {
        html = ""
    } else {
        html = `
    
        <div class="message">
        
            <select class="select--friends">
                <option>Select User</option>
            </select>

            <input class="message__section" placeholder="Type Message Here" name="messageFormBody" type="text">
            
        </div>
    `
    }

    return html
}

