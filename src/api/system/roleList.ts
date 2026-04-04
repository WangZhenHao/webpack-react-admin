import { ipost, iget } from '@assets/js/axios';

export const getRoleList = function () {
    return iget('/data/roleList.json');
} as typeof $api.user.getRoleList;
