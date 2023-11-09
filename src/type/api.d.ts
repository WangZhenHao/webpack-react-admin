declare namespace $api {}

declare namespace $api.user {
    interface loginParmas {
        username: string;
        password: string;
    }

    interface menuList {
        id: string;
        parentId: string;
        sort: string;
        path: string;
        name: string;
        icon?: string;
        child?: menuList[];
    }
    interface ServiceResponse_List_AppMatrlApplyVo__ {
        /** 返回值/对象/列表 */
        result: {
            list: Array<menuList>;
            token: string;
        };
        /** 返回码 */
        retCode?: string;
        /** 返回消息 */
        retMsg?: string;
        /**  */
        success?: boolean;
    }

    /** [app] 获取物料审批历史记录 http://192.168.1.126:31861/swagger-ui.html#/app45matrl45apprvl45service/getHistoryApprvlsUsingGET */
    function userLoginIn(
        params: loginParmas,
        option?: any
    ): Promise<ServiceResponse_List_AppMatrlApplyVo__>;

    interface ServiceResponse_List_userLoginInVo__ {
        /** 返回值/对象/列表 */
        result: Array<menuList>;
        /** 返回码 */
        retCode?: string;
        /** 返回消息 */
        retMsg?: string;
        /**  */
        success?: boolean;
    }
    function getMenuList(
        params?: any,
        option?: any
    ): Promise<ServiceResponse_List_userLoginInVo__>;

    interface roleListResult {
        code: string;
        description: string;
        id: string;
        name: string;
    }

    interface roleListResult_InVo__ {
        /** 返回值/对象/列表 */
        result: Array<roleListResult>;
        /** 返回码 */
        retCode?: string;
        /** 返回消息 */
        retMsg?: string;
        /**  */
        success?: boolean;
    }

    function getRoleList(): Promise<roleListResult_InVo__>;
}
