import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { HttpClientRequestOptions } from '@/modules/client/client.types';

// Sample Token
const token = '1';
type axiosRequestConfigType = Omit<AxiosRequestConfig, 'method'>;

class HttpClient {
  private $axiosInstance;
  private baseURL = process.env.VUE_APP_API_BASE_URL;
  private defaultTimeout = 2 * 1000;

  constructor() {
    this.$axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: this.defaultTimeout,
    });

    this.$axiosInstance.interceptors.request.use(this.requestInterceptor, this.errorInterceptor);
    this.$axiosInstance.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);
  }

  async get<T>(config: axiosRequestConfigType, options?: HttpClientRequestOptions) {
    return this.apiCall<T>({ ...config, method: 'get' }, options);
  }
  async post<T>(config: axiosRequestConfigType, options?: HttpClientRequestOptions) {
    return this.apiCall<T>({ ...config, method: 'post' }, options);
  }
  async put<T>(config: axiosRequestConfigType, options?: HttpClientRequestOptions) {
    return this.apiCall<T>({ ...config, method: 'put' }, options);
  }
  async delete<T>(config: axiosRequestConfigType, options?: HttpClientRequestOptions) {
    return this.apiCall<T>({ ...config, method: 'delete' }, options);
  }
  async patch<T>(config: axiosRequestConfigType, options?: HttpClientRequestOptions) {
    return this.apiCall<T>({ ...config, method: 'patch' }, options);
  }

  private async apiCall<T = unknown>(config: AxiosRequestConfig<T>, options?: HttpClientRequestOptions): Promise<T> {
    const requiresToken = options?.requiresToken ?? true;

    if (requiresToken && token) {
      config.headers = {
        Authorization: token,
      };
    }

    return this.$axiosInstance.request(config);
  }

  private requestInterceptor(config: AxiosRequestConfig) {
    config.headers = Object.assign(
      {},
      {
        'content-type': 'application/json',
      },
      config.headers || {},
    );

    return {
      ...config,
    };
  }

  private responseInterceptor(response: AxiosResponse) {
    // 에러가 발생한 경우 에러 처리
    if (!response.data.header.isSuccessful) {
      console.log('에러처리');
    }
    // 에러가 없는 경우 return response
    return response.data.data;
  }

  private errorInterceptor(error: AxiosError) {
    // 공통 에러처리
    return Promise.reject(error);
  }
}

export default new HttpClient();
