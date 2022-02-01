import axios from 'axios'; 

const axiosWithAuth = () => {
    const token = localStorage.getItem("token"); 

    return axios.create({
        headers: {
            authorization: token
        }, 
        baseURL: "https://bw-anywherefitness-3.herokuapp.com/api"
    })
}

export default axiosWithAuth;