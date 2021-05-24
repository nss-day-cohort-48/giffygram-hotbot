export const MessageForm = () => {
    return `
        <div class="message">
        
            <select class="select--friends">
                <option>Select User</option>
            </select>

            <input class="message__section" placeholder="Type Message Here" name="messageFormBody" type="text">
            
        </div>
    `
}