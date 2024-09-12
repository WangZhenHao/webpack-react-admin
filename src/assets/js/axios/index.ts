import { request, CancelToken } from './request';
import type { optionsParams, apiServer, respoonceRse } from './axios.type';

const $apiServer: apiServer = {
    baseURL: `${process.env.REACT_APP_API}`,
};

function isAbsoluteURL(url: string) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

/**
 * get请求
 * @param url
 * @param params
 * @param options
 */
function iget(
    url: string,
    params?: any,
    options: optionsParams = {}
): Promise<respoonceRse> {
    const target = options.target || 'baseURL';
    const origin = $apiServer[target] || '';
    options['method'] = 'GET';
    options['action'] = 'json';
    url = isAbsoluteURL(url) ? url : origin + url;

    return request(url, params, options);
}

/**
 * post请求
 * @param url
 * @param params
 * @param options
 */
function ipost(
    url: string,
    params?: any,
    options: optionsParams = {}
): Promise<respoonceRse> {
    const target = options.target || 'baseURL';
    const origin = $apiServer[target] || '';

    options['method'] = 'POST';
    options['action'] = options['action'] || 'json';
    url = isAbsoluteURL(url) ? url : origin + url;

    return request(url, params, options);
}

/**
 * 
 * @param url 
 * @param data 
 * @returns 
 */
function jsonp (url: string,data: any){
    if(!url)
        throw new Error('url is necessary')
    const callback = 'CALLBACK' + Math.random().toString().substr(9,18)
    const JSONP = document.createElement('script')
          JSONP.setAttribute('type','text/javascript')

    const headEle = document.getElementsByTagName('head')[0]

    let ret = '';
    if(data){
        if(typeof data === 'string')
            ret = '&' + data;
        else if(typeof data === 'object') {
            for(let key in data)
                ret += '&' + key + '=' + encodeURIComponent(data[key]);
        }
        ret += '&_time=' + Date.now();
    }
    JSONP.src = `${url}?callback=${callback}${ret}`;
    return new Promise( (resolve,reject) => {
        (window as any)[callback] = (r: any) => {
          resolve(r)
          headEle.removeChild(JSONP)
          delete (window as any)[callback]
        }
        headEle.appendChild(JSONP)
    })

}

export { iget, ipost, CancelToken, jsonp };
