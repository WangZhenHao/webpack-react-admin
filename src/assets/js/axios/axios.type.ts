import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface optionsParams extends AxiosRequestConfig {
    action?: string;
    showError?: boolean;
    target?: string;
}

export interface myAxiosRequestConfig<D = any> extends AxiosRequestConfig {
    userConfig: {
        showError?: boolean;
        action?: string;
    };
}
export interface apiServer {
    baseURL: string;
    [key: string]: string;
}

export interface respoonceRse {
    code: number;
    msg: string;
    result: any;
}
// export interface myAxiosResponse<T = any, D = any> extends AxiosResponse {
//   config: myAxiosRequestConfig<D>;
// }
