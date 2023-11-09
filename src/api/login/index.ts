import { ipost, iget } from '@js/axios';

export const userLoginIn = function (data, option) {
    return iget('/data/user/userLoginIn.json1', data, option);
} as typeof $api.user.userLoginIn;

export const getMenuList = function (data, option) {
    return iget('/data/user/getUserList.json', data, option);
} as typeof $api.user.getMenuList;
// const typea = $api.user.userLoginIn
