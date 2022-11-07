import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

const register = (data) => {
    // return axios({
    //     method: 'POST',
    //     url: API_URL + signup,
    //     data: {
    //         username: data.username,
    //         email: data.email,
    //         password: data.password,
    //     }
    // });
}

const login = (data) => {
    return axios({
        method: 'POST',
        url: API_URL + signup,
        data: {
            username: data.username,
            email: data.email,
            password: data.password,
        }
    }).then(res => {
        if(res.data.accessToken){

        }
    });
}

const logout = () => {

}