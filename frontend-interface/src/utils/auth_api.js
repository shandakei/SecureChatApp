import axios from 'axios'

export async function login(userInfo) {
    let res = await axios.post(`/SCA/login`, userInfo) 
    // console.log(res)
    return res.data.token
}

export async function signUp(userInfo) {
    console.log(userInfo)
    let res = await axios.post(`/SCA/signUp`, userInfo) 
    // console.log(res)
    return res.data.token
}

export async function getNewToken(userInfo) {
    let res = await axios.post(`/SCA/updateProfile`, userInfo) 
    // console.log(res)
    return res.data.token
}