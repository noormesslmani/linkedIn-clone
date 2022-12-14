import axios from 'axios';
const baseURL='http://localhost:3000'
let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
};
//user registration
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
//company registration
function registerCompany(email, password, name, city,country, setTakenEmail){
    axios.post(`${baseURL}/auth/company-signup`, {
        email: email,
        password: password,
        name: name,
        city: city,
        country: country
    })
        .then(function (response) {
        
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('me',JSON.stringify(response.data.company))
            console.log(localStorage)
            return (response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
//user login
function userLogIn(email, password,setInvalidAccount, navigate){
    axios.post(`${baseURL}/auth/user-login`, {
        email: email,
        password: password,
    })
        .then(function (response) {
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('me',JSON.stringify(response.data.user))
            console.log(response.data)
            navigate('/user-home')
            return (response.data)
        })
        .catch(function (error) {
            setInvalidAccount(true)
            console.log(error);
        });
}
//company login
function companyLogIn(email, password,setInvalidAccount, navigate){
    axios.post(`${baseURL}/auth/company-login`, {
        email: email,
        password: password,
    })
    .then(function (response) {
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('me',JSON.stringify(response.data.company))
        navigate('/company-home')
        return (response.data)
    })
    .catch(function (error) {
        setInvalidAccount(true)
        console.log(error);
    });
}
//user apply for a job
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
//user add experience
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
//user add education
function addEducation(school, degree,field,startMonth,startYear,endMonth,endYear,grade){
    axios.put(`${baseURL}/users/education`, {school: school, degree: degree, field: field,start_month: startMonth,start_year: startYear,end_month: endMonth,end_year: endYear,grade: grade}
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
//user display companies
function displayCompanies(setCompanies){
    axios.get(`${baseURL}/users/companies`, config)
    .then(function (response) {
        setCompanies(response.data)
      
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}
//user display jobs
function displayJobs(setJobs){
    axios.get(`${baseURL}/companies/jobs`, config)
    .then(function (response) {
    
        localStorage.setItem('jobs',JSON.stringify(response.data))
        setJobs(response.data)
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}
//user follow company
function followCompany(id, setFollow){
    axios.put(`${baseURL}/users/follow-company`, {company_id: id}
    , config)
    .then(function (response) {
        console.log(response.data)
        localStorage.setItem('me',JSON.stringify(response.data))
        setFollow(true)
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}
//user unfollow company
function unfollowCompany(id, setFollow){
    axios.put(`${baseURL}/users/unfollow-company`, {company_id: id}
    , config)
    .then(function (response) {
        console.log(response.data)
        localStorage.setItem('me',JSON.stringify(response.data))
        setFollow(false)
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}
//company create new job
function createJob(title, type, experience, description){
    axios.post(`${baseURL}/companies/`, {title: title, employment_type:type, experience:experience, details: description}, config)
    .then(function (response) {
        console.log(response.data)
        localStorage.setItem('me',JSON.stringify(response.data.company))
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}
//user get notifications
function getNotifications(setNotifications){
    axios.get(`${baseURL}/users/notifications`, config)
    .then(function (response) {
        console.log(response.data)
        setNotifications(response.data)
        return (response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}
//user add skills
function addSkill(skill){
    axios.put(`${baseURL}/users/skills`, {skill:skill},config)
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
    addExperience,
    addEducation,
    displayCompanies,
    followCompany,
    unfollowCompany,
    registerCompany,
    companyLogIn,
    displayJobs,
    createJob,
    getNotifications,
    addSkill
}