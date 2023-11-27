import { getMenuList } from "@api/login";
import { useEffect, useState } from "react";
import PageLayout from "@components/global/pageLayout";
import { Form, Input, Button } from "antd";
import PageTable from "@components/global/pageTable";

type typeList = Awaited<ReturnType<typeof getMenuList>>["result"];

export default function App() {
    const [list, setList] = useState<typeList>([]);
    useEffect(() => {
        getMenuList().then((res) => {
            setList(res.result);
        });
    }, []);

    const header = (
        <>
            <Form layout="inline">
                <Form.Item name="note" label="菜单名称">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">
                        搜索
                    </Button>
                </Form.Item>
            </Form>
        </>
    );

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

    const content = <>
        <PageTable table={{
            dataSource: list,
            columns: col
        }} />
    </>;

    return (
        <>
            <PageLayout header={header} content={content} />
        </>
    );
}
