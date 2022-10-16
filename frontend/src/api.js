import axios from 'axios';
const baseURL='http://localhost:3000'
let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
};
export default function registerUser(email, password, firstname, lastname){
    
    axios.post(`${baseURL}/auth/user-signup`, {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname
    })
        .then(function (response) {
            console.log(response.data)
            return (response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}