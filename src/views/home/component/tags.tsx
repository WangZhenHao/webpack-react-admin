import style from "./component.module.scss";
import { Tag } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import { selectUserInfo } from "@store/user";
import { useAppSelector } from "@store/hooks";

export default function App() {
    const userInfo = useAppSelector(selectUserInfo);
    const href = useLocation()
    // const [item, setIm]

    // console.log(href)


    const onCloseHanlde = () => {
        alert(1)
    }

    function List() {
        const mapList = [];
        const item = userInfo?.list?.find(item => item.path === href.pathname)
        if(item) {
            mapList.push(item)
        }
        
        const onclickHandle = (item: any) => {
            alert(item)
        }

        const tabList = mapList.map(item => <Tag key={item.path} className={`${item.path === href.pathname ? style.tagActive : ''}`} closable onClick={() => onclickHandle(item)} onClose={() => {
            onCloseHanlde()
        }}>{item.name}</Tag>)
        
        return <>{tabList}</>;
    }
    return <>
        <div className={`${style.tagWrap} flex w-full items-center`}>
                <List />
        </div>
    </>
}