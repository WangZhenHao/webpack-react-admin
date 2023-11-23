import { getMenuList } from "@api/login";
import { useEffect, useState } from "react";
import PageLayout from "@components/global/pageLayout";
import { Form, Input, Button } from "antd";

export default function App() {
    useEffect(() => {});

    const header = (
        <>
            <Form layout="inline">
                <Form.Item name="note" label="Note">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );

    const content = <>
        
    </>

    return (
        <>
            <PageLayout header={header} />
        </>
    );
}
