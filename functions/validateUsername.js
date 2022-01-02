// var usernameRegex = /^[a-zA-Z0-9]+$/;
function validateUsername(username) {
    let regrexUsername = /^[a-zA-Z0-9]+$/
    if (username.match(regrexUsername)) {
        return true;
    } else {
        return false;
    }
}

export default validateUsername;
