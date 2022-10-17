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
            localStorage.setItem('me',JSON.stringify(response.data.user))
            console.log(localStorage)
            return (response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function userLogIn(email, password,setInvalidAccount){
    axios.post(`${baseURL}/auth/user-login`, {
        email: email,
        password: password,
    })
        .then(function (response) {
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('me',JSON.stringify(response.data.user))
            console.log(response.data)
           
            return (response.data)
        })
        .catch(function (error) {
            setInvalidAccount(true)
            console.log(error);
        });
}
function apply(id){
    axios.put(`${baseURL}/users/apply`, {job_id:id}, config)
        .then(function (response) {
            console.log(response.data)
            return (response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
function addExperience(title, type,company,startMonth,startYear,endMonth,endYear,location,industry){
    axios.put(`${baseURL}/users/experience`, {title: title, employment_type: type,company_name: company,start_month: startMonth,start_year: startYear,end_month: endMonth,end_year: endYear,location: location,industry: industry}
    , config)
    .then(function (response) {
        console.log(response.data)
        localStorage.setItem('me',JSON.stringify(response.data))
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

export{
    userLogIn,
    registerUser,
    apply,
    addExperience
}