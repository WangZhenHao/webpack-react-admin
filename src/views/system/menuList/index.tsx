// import { getMenuList } from "@api/login";
import { useEffect, useState, useRef } from "react";
// import PageLayout from "@components/global/pageLayout";
import { Form, Input, Button } from "antd";
// import PageTable from "@components/global/pageTable";
import Pages from "@components/global/pages";
import type { typeRef } from "@components/global/pages";

// type typeList = Awaited<ReturnType<typeof getMenuList>>["result"];

export default function App() {
    // const [list, setList] = useState<typeList>([]);
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
            title: "菜单名称",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "路径",
            dataIndex: "path",
            key: "path",
        },
        {
            title: "图标",
            dataIndex: "icon",
            key: "icon",
        },
        {
            title: "排序值",
            dataIndex: "sort",
            key: "sort",
        },
    ];

    return (
        <>
            <Pages
                ref={childRef}
                header={header()}
                columns={col}
                attribute={{ url: "/data/user/getUserList.json" }}
            ></Pages>
        </>
    );
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
}
