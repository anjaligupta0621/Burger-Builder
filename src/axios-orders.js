import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ca6bd-default-rtdb.firebaseio.com/'
});

export default instance;