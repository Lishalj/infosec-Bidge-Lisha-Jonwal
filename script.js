var login = document.getElementById("login")
var signup = document.getElementById("signup")
var loginMain = document.getElementById("login-main")
var signMain = document.getElementById("sign-main")
var main = document.getElementById("main")


const loginfunc = () => {
    login.style.borderBottomStyle="solid"
    login.style.borderBottomWidth="3px"
    login.style.borderBottomColor="#ff0066";
    signup.style.borderBottomStyle="none"
    loginMain.style.display="flex"
    main.style.height="30%"
    signMain.style.display="none"
}
const signupfunc = () => {
    signup.style.borderBottomStyle="solid"
    signup.style.borderBottomWidth="3px"
    signup.style.borderBottomColor="#ff0066";
    login.style.borderBottomStyle="none"
    signMain.style.display="flex"
    main.style.height="35%"
    loginMain.style.display="none"

}
