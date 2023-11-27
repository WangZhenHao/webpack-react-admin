import { getRoleList } from "@api/system/roleList";
import { useEffect, useState } from "react";
import PageLayout from "@components/global/pageLayout";
import { Form, Input, Button } from "antd";
import PageTable from "@components/global/pageTable";

type typeList = Awaited<ReturnType<typeof getRoleList>>["result"];

export default function App() {
    const [list, setList] = useState<typeList>([]);
    useEffect(() => {
        getRoleList().then((res) => {
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
