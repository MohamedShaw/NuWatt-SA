import axios from 'axios';

import {API_ENDPOINT} from './urls.json';
const instance = axios.create({
  baseURL: API_ENDPOINT,
});

instance.interceptors.request.use(async req => {
  // handle generic headers ex authization token
  req.headers['Content-Type'] = 'application/json';

  return req;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // handle geniric error
  },
);
export {instance};
