const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

export const fetchUsers = () => {

    return fetch(`${apiURL}/users`)
    .then((res) => res.json())
    .then((usersResponse) => {
        applicationState.users = usersResponse
    })
}

export const getUsers = () => {
    return [...applicationState.users]
}