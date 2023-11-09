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

export { iget, ipost, CancelToken };
