import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const CLIENT_ID = "f93944e040a8422283f76f7c0859189e";
const CLIENT_SECRET = "77c19420d4784da09c3b651bc7f9897e";
  

const getToken = () => {
  if(localStorage.getItem('token')){
    console.log("Token từ localStorage");
    return localStorage.getItem('token');
  }else {
    axios('https://accounts.spotify.com/api/token',{
        'method' : "POST",
        'headers' : {
          'Content-Type': "application/x-www-form-urlencoded",
          'Authorization': `Basic ` + (new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')),
        },
        'data' :"grant_type=client_credentials"
      })
      .then(tokenResponse => { 
        localStorage.setItem('token',tokenResponse.data.access_token);
        console.log("Token từ API");
        return tokenResponse.data.access_token;
      })
      .catch(error => console.log(error))
  }
}

const axiosClient = axios.create({
  baseURL: "https://api.spotify.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " + getToken(),
  },
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
