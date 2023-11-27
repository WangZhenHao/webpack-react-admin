import { Table, Button } from "antd";
import PageLayout from "@components/global/pageLayout";
import PageTable from '@components/global/pageTable'

export default function App() {
    const data = [
        {
            date: "2016-05-03",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-02",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-04",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-01",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-03",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-02",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-04",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-01",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-03",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-02",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-04",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-01",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-03",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-02",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
        {
            date: "2016-05-04",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Home",
        },
        {
            date: "2016-05-01",
            name: "Tom",
            state: "California",
            city: "Los Angeles",
            address: "No. 189, Grove St, Los Angeles",
            zip: "CA 90036",
            tag: "Office",
        },
    ];
    const columns: $table.column[] = [
        {
            title: "日期",
            key: "date",
            dataIndex: "date",
        },
        {
            title: "姓名",
            key: "name",
            dataIndex: "name",
        },
        {
            title: "日期",
            key: "date",
            dataIndex: "date",
        },
        {
            title: "州",
            key: "state",
            dataIndex: "state",
        },
        {
            title: "城市",
            key: "city",
            dataIndex: "city",
        },
        {
            title: "操作",
            key: "action",
            dataIndex: "action",
            render: (_: any, action: any) => {
                return (
                    <>
                        <Button>操作{action.name}</Button>
                    </>
                );
            },
        },
    ];

    const table = (
        <PageTable heightAuto table={{columns: columns, dataSource: data}}/>
    );
    return (
        <>
            <PageLayout content={table} />
        </>
    );
}
