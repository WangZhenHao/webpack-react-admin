import { Table } from "antd";
import { useWindowListener } from "@/hooks/eventListener";
import type { TableProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { debounce } from "@js/utils/index";

interface typeProps {
    table: TableProps<any>;
    attribuate?: any;
    heightAuto?: Boolean;
    keyAuto?: Boolean
}
function addKey(list: any[]) {
    let index = 0
    return list.map((item) => {
        item.key = index++

        return item;
    })
}
export default function App(props: typeProps) {
    const tableProps = props.table;
    const heightAuto = typeof props.heightAuto === 'boolean' ? props.heightAuto : true;
    const tableRef = useRef(null);
    const keyAuto = typeof props.keyAuto === 'boolean' ? props.keyAuto : true;
    
    if(keyAuto) {
        props.table.dataSource = addKey(JSON.parse(JSON.stringify(props.table.dataSource)))
    }

    const [scroll, setScroll] = useState({
        scroll: props.table.scroll || {},
    });

    const rezieHandle = function (props: typeProps) {
        if (heightAuto && !props.table.scroll?.y) {
            const parentNode = (tableRef.current! as Element).parentElement;
            const tableHeader = parentNode?.querySelector(".ant-table-thead");

            if (parentNode && tableHeader) {
                let y =
                    parentNode!.getBoundingClientRect().height -
                    tableHeader.getBoundingClientRect().height - 15;
                
                setScroll({
                    scroll: {
                        y,
                        x: props.table.scroll?.x,
                    },
                });
            }
        }
    };
    // debugger

    useEffect(() => {
        rezieHandle(props);
    }, [props]);

    useWindowListener("resize", debounce(rezieHandle, 100));
    // let

    return (
        <>
            <div ref={tableRef} className="h-full">
                <Table
                    size="small"
                    bordered
                    pagination={false}
                    {...tableProps}
                    {...scroll}
                />
            </div>
        </>
    );
}
