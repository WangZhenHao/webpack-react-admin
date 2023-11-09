import axios from 'axios';
import { message } from 'antd';

import type {
    optionsParams,
    myAxiosRequestConfig,
    // myAxiosResponse,
} from './axios.type';
import type { AxiosError, AxiosResponse } from 'axios';

function Toast(text: string) {
    // ElMessage({
    //     type: 'error',
    //     message: text,
    // });
    message.error(text)
}

function requestError(code: number): string {
    // const statusCode = Number(code);
    switch (code) {
        case 400:
            return 'Bad Request (错误的请求)';
        case 401:
            return 'Unauthorized (请求要求身份验证)';
        case 403:
            return 'Forbidden (服务器拒绝请求)';
        case 404:
            return 'NOT Found (服务器找不到请求的资源)';
        case 405:
            return 'Bad Request (禁用请求中指定的方法)';
        case 406:
            return 'Not Acceptable (无法使用请求的内容特性响应请求的网页)';
        case 407:
            return 'Proxy Authentication Required (需要代理授权)';
        case 408:
            return 'Request Timed-Out (服务器等候请求时发生超时)';
        case 409:
            return 'Conflict (服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息)';
        case 410:
            return 'Gone (请求的资源已被永久删除)';
        case 411:
            return 'Length Required (服务器不接受不含有效内容长度标头字段的请求)';
        case 412:
            return 'Precondition Failed (未满足前提条件)';
        case 413:
            return 'Request Entity Too Large (请求实体过大)';
        case 414:
            return 'Request, URI Too Large (请求的 URI 过长)';
        case 415:
            return 'Unsupported Media Type (不支持的媒体类型)';
        case 429:
            return '您的操作过于频繁,请稍后重试';
        case 500:
            return 'Internal Server Error (服务器内部错误)';
        case 501:
            return 'Not Implemented (尚未实施)';
        case 502:
            return 'Bad Gateway (错误网关)';
        case 503:
            return 'Server Unavailable (服务不可用)';
        case 504:
            return 'Gateway Timed-Out (网关超时)';
        case 505:
            return 'HTTP Version not supported (HTTP 版本不受支持)';
        default:
            return '网络异常';
    }
}

const CancelToken = axios.CancelToken;
const reqConfig = {
    baseURL: '/', // process.env.baseURL || process.env.apiUrl || ""
    timeout: 40 * 1000, // Timeout
};

const Axios = axios.create(reqConfig);

/**
 * 取消请求
 *
 * 使用方法：
 * import { getRequest, postRequest, CancelToken } from '@/assets/js/axios/index'
 *
 * function test () {
      let source1 = CancelToken.source();

      getRequest('/web-assess/security/gtDictionary/queryGtDictionaryPage', {
        cityId: '3bf5263a-0811-479a-94b2-0c8dc197fdaa',
        currentPage: 1,
        pageSize: 20
      }, {
        cancelToken: source1.token
      }).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })

      setTimeout(() => {
        source1.cancel('Operation canceled by the user.')
      }, 100)

  }

  test()
 */
// const source = CancelToken.source();
// 返回数据全部遍历做处理

Axios.interceptors.response.use(
    (res: AxiosResponse) => {
        const data = res.data;
        const userConfig = (res.config as myAxiosRequestConfig).userConfig;

        // if(userConfig.showLoading) { Toast.clear(); }
        if (data.code === 0 || data.code === 200) {
            return data;
        } else {
            if (userConfig.showError !== false) {
                Toast(data.retMsg || data.msg);
            }

            return Promise.reject(data);
        }
    },
    (error: AxiosError) => {
        const response = error.response;
        
        if (error.message.includes('timeout')) {
            // 判断请求异常信息中是否含有超时timeout字符串
            Toast(requestError(504) || '服务器异常');
        } else {
            Toast(response ? requestError(response.status) : '网络异常！');
        }
        return Promise.reject(error);
    }
);

/**
 * 请求封装
 * @param url
 * @param params
 * @param options
 */
function request(
    url: string,
    params: any,
    options: optionsParams
): Promise<any> {
    const method = options.method || 'GET';
    let action = 'application/json;charset=UTF-8';
    // const timeout = options.timeout || 15000
    const cancelToken = options.cancelToken;

    if (options.action !== 'json') {
        action = 'application/x-www-form-urlencoded';
    }

    const config: myAxiosRequestConfig = {
        userConfig: {
            showError: options.showError === false ? false : true,
        },
        url,
        method,
        headers: {
            'Content-Type': action,
        },
        cancelToken,
    };

    // if(options.showLoading) {
    //   Toast.loading({
    //     message: options.loadingTips || '',
    //     forbidClick: true,
    //     duration: 0,
    //   });
    // }

    config[method === 'GET' ? 'params' : 'data'] = params;
    return Axios(config);
}

export { request, CancelToken };
