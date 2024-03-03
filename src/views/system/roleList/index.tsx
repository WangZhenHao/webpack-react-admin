import { getRoleList } from "@api/system/roleList";
import { useEffect, useState, useRef } from "react";
import PageLayout from "@components/global/pageLayout";
import { Form, Input, Button } from "antd";
import PageTable from "@components/global/pageTable";
import Pages from "@components/global/pages";
import type { typeRef } from "@components/global/pages";

// type typeList = Awaited<ReturnType<typeof getRoleList>>["result"];

export default function App() {
    const childRef = useRef<typeRef>();
    // useEffect(() => {
    //     getMenuList().then((res) => {
    //         setList(res.result);
    //     });
    // }, []);

    const header = function() {
        const onSearch = function() {
            childRef.current?.init();
        }
        return (
            <>
                <Form layout="inline">
                    <Form.Item name="note" label="菜单名称">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={onSearch} type="primary">搜索</Button>
                    </Form.Item>
                </Form>
            </>
        );
    }

    const col: $table.column[] = [
        {
            title: "id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "名称",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "角色代码",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "描述",
            dataIndex: "description",
            key: "description",
        },
    ];

    // const content = <>
    //     <PageTable table={{
    //         dataSource: list,
    //         columns: col
    //     }} />
    // </>;

    // return (
    //     <>
    //         <PageLayout header={header} content={content} />
    //     </>
    // );
    return <>
        <>
            <Pages
                ref={childRef}
                header={header()}
                columns={col}
                attribute={{ url: "/data/roleList.json" }}
            ></Pages>
        </>
    </>
}
