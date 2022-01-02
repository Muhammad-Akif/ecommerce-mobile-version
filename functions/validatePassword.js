const validatePassword = (password) => {
    var passwordRegrex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (password.match(passwordRegrex)) {
        return true;
    } else {
        return false;
    }
}

export default validatePassword;
