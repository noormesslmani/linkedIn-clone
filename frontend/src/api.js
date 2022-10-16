import axios from 'axios';
const baseURL='http://localhost:3000'
let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
};

function registerUser(email, password, firstname, lastname,setTakenEmail){
    axios.post(`${baseURL}/auth/user-signup`, {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname
    })
        .then(function (response) {
        
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('me',response.data.user)
            return (response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function userLogIn(email, password,setInvalidAccount){
    console.log(email)
    console.log(password)
    axios.post(`${baseURL}/auth/user-login`, {
        email: email,
        password: password,
    })
        .then(function (response) {
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('me',response.data.user)
            return (response.data)
        })
        .catch(function (error) {
            setInvalidAccount(true)
            console.log(error);
        });
}
export{
    userLogIn,
    registerUser
}