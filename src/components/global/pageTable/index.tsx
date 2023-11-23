import { Table } from "antd";
import { useWindowListener } from "@/hooks/eventListener";
import type { TableProps } from 'antd'
import { useEffect, useRef, useState } from "react";
import { debounce } from '@js/utils/index'


interface typeProps {
    table: TableProps<any>
    attribuate?: any,
    heightAuto?: Boolean
}

export default function App(props: typeProps) {
    const tableProps = props.table
    const heightAuto = props.heightAuto
    const tableRef = useRef(null);

    const [scroll, setScroll] = useState({
        scroll: props.table.scroll || {}
    })

    if(heightAuto && !props.table.scroll?.y) {
        const rezieHandle = function() {
            const parentNode = (tableRef.current! as Element).parentElement;
            const tableHeader = parentNode?.querySelector('.ant-table-thead');

            if(parentNode && tableHeader) {
                let y = parentNode!.getBoundingClientRect().height - tableHeader.getBoundingClientRect().height;
                
                setScroll({
                    scroll: {
                        y,
                        x: props.table.scroll?.x
                    }
                })

            }
            
        }
        // debugger
        useEffect(() => {
            rezieHandle()
        }, [])

        useWindowListener('resize', debounce(rezieHandle, 100))
    }

    // let

    return (
        <>
            <div ref={tableRef}>
                <Table
                    size="small"
                    bordered
                    rowKey={(recode) => {
                        return String(Math.random() * 99999);
                    }}
                    pagination={false}
                    {...tableProps}
                    {...scroll}
                />
            </div>
        </>
    );
}
