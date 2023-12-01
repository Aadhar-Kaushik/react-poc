import axios from "axios"
import { getBaseURL } from "../configurations/configuration"

export function getApi(url, token = "") {
    const request = {
        headers: {
            Atuthorization: token,
            "Content-type": "application/json",
            "Accept-Language": "hn-India",

        }
    }

    return axios({
        method: "GET",
        url:getBaseURL().baseUrl+url,
        headers: request.headers,
        validateStatus: status => status >= 200 && status < 400
    })
    .then(res=>res)
    .catch(err=>{
        if(err && err.code==="ERR_NETWORK"){
            return Promise.resolve(err)
        }
        return Promise.reject(err)
    })
    .finally(()=>{
        const delay=setTimeout(() => {
            clearTimeout(delay)
        }, 200);
        console.warn("finally block getAPI :::: HIDE LOADER")
    })
    
}

export function postApi(url,body,token=""){
    const request={
        headers:{
            Accept:"application/json",
            "Accept-Language":"hn-India",
            "Content-type":"application/json",
            
        },
        data:body!==undefined?JSON.stringify(body):null
    }
    
    return axios({
        method:"POST",
        url:getBaseURL().baseUrl+url,
        headers:request.headers,
        data:request.data,
        validateStatus:status=>status>=200 && status <400 
    })
    .then(res=>res)
    .catch(err=>{
        if(err && err.code==="ERR_NETWORK"){
            return Promise.resolve(err)
        }
        return Promise.reject(err)
    })
    .finally(()=>{
        const delay=setTimeout(() => {
            clearTimeout(delay)
        }, 200);
        console.warn("finally block postAPI :::: HIDE LOADER")
        
    })
    
}

axios.interceptors.request.use(req=>{
    console.warn("SHOW LOADER")
    return req
},
err=>{
    return Promise.reject(err)
})