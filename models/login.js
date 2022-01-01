class Login {
    constructor(email, username, password, whoIsLogin) {
        this.email = email; // unique & string
        this.username = username; // unique & string
        this.password = password; // string
        this.whoIsLogin = whoIsLogin; // string
    }
}

export default Login;
