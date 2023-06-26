import Axios from 'axios';
import { AppConfig } from 'configs/app.config';

const auth = Axios.create({
    baseURL: AppConfig.apiAuthBase,
});

const main = Axios.create({
    baseURL: AppConfig.apiMainBase,
})

// request interceptor to add token to request headers
// axios.interceptors.request.use(
//     async (config) => {
//         // Implement function to get token
//         const token = {
//             accessToken: 'my-access-token',
//             refreshToken: 'my-refresh-token',
//         };

//         if (token?.accessToken) {
//             config.headers.Authorization = `Bearer ${token?.accessToken}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// response interceptor intercepting 401 responses, refreshing token and retrying the request
// axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         // Implement logic here

//         return Promise.reject(error);
//     }
// );
export default { auth, main };