import axios, { AxiosRequestConfig, Method, AxiosRequestHeaders } from 'axios';

interface ApiTypes {
  url?: string;
  method?: Method;
  headers?: AxiosRequestHeaders;
  data?: any;
  contentType?: string;
}

class Api {
  callApi({ url, method, data, contentType = 'application/json' }: ApiTypes) {
    const requestParam: AxiosRequestConfig = {
      url,
      method,
      headers: { 'Content-Type': contentType },
      data,
    };
    return axios(requestParam);
  }
}

export const api = new Api();
