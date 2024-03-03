import React from "react";
import PageLayout from "../pageLayout";
import PageTable from "../pageTable";
// import { useEffect, useState } from "react";
import { ipost, iget } from "@js/axios";
import {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
    useEffect,
} from "react";

import { Pagination } from 'antd'


interface typeProps {
    attribute: {
        url: string;
        method?: "get" | "post";
        reqeust?: boolean,
        fromValue?: any;
        showPage?: boolean
    };
    columns: $table.column[];
    header?: any
}

export interface typeRef {
    getList: Function
    init: Function
}
// class Pages extends React.Component {
//     props: any = null;

//     render(): React.ReactNode {
//         return <PageLayout></PageLayout>;
//     }
// }
function request(type: typeProps['attribute']['method']) {
    const map = {
        'get': iget,
        'post': ipost
    }
    return map[type!]
}



export default forwardRef((props: typeProps, ref) => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState<$api.user.pageParmas>({});
    let loading = useRef<boolean>(false)
    const {
        showPage,
        method,
        reqeust,
        fromValue
    } = props.attribute
    const type = method || 'get';
    const isReqeust = typeof reqeust === 'boolean' ? reqeust : true;
    const isShowPage = typeof showPage === 'boolean' ? reqeust : true;
    const params = fromValue || {};

    const publicRef: typeRef = {
        getList(){
            
            if(loading.current) return;

            loading.current = true;
            request(type)(props.attribute.url, params).then((res) => {
                setList(res.result);
                setPage(res.page || {})
                loading.current = false;
            })
        },
        init() {
            params.page = 1;
            publicRef.getList();
        }
    };

    useImperativeHandle(ref, () => publicRef);

    useEffect(() => {
        if(isReqeust) {
            publicRef.getList();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    const footer = () => {
        if(isShowPage) {
            return <Pagination defaultCurrent={1} defaultPageSize={20} total={page.total} />;
        }
         
    };
    

    return (
        <PageLayout
            header={props.header}
            content={
                <PageTable
                    table={{ columns: props.columns, dataSource: list }}
                ></PageTable>
            }
            footer={footer()}
        ></PageLayout>
    );
});
