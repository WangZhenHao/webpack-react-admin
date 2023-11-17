import style from "./component.module.scss";
import { Tag } from 'antd';

export default function App() {
    const onCloseHanlde = () => {
        alert(1)
    }

    function List() {
        const mapList = [1,2,3,4]

        const tabList = mapList.map(item => <Tag className={`${item === 1 ? style.tagActive : ''}`} closable onClose={() => {
            onCloseHanlde()
        }}>预览{item}</Tag>)
        
        return <>{tabList}</>;
    }
    return <>
        <div className={`${style.tagWrap} flex w-full items-center`}>
                <List />
        </div>
    </>
}