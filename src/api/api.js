import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a8c0b1e7-7074-4af2-bb10-5fb36841f16b',
  },
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => {
            return response.data;
          });
      }
}


