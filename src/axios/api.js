import axios from "axios";

const instance = axios.create({
    baseURL : process.env.REACT_APP_SERVER_URL,
    timeout : 2000,
});

instance.interceptors.request.use(
    function(config){
        console.log("인터셉터 요청 성공")
        return config;
    },
    function(error){
        console.log("인터셉터 요청 오류")
        return Promise.reject(error);
    },
);


instance.interceptors.response.use (
    function(response){
        console.log("인터셉터 응답 받았습니다.");
        return response;
    },
    function(error){
        console.log("인터셉터 응답 오류 발생")
        return Promise.reject(error);
    },
);
    
export default instance;