import axios from "axios";


const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDBk7M8w7-VniScb2Vj_3A0YmjaI9LULY4',
    },
});

export default request;