import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://6b76-5-103-118-250.eu.ngrok.io',
});

instance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  
  export default instance;