import style from "./component.module.scss";
import { Tag } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { selectUserInfo } from "@store/user";
import { useAppSelector } from "@store/hooks";
import { useState, useEffect } from "react";

export default function App() {
    const userInfo = useAppSelector(selectUserInfo);
    const [breadcrumbList, setBreadcrumbList] = useState<$api.user.menuList[]>(
        []
    );
    const href = useLocation();
    const navigate = useNavigate();

    function List() {
        useEffect(() => {
            const item = userInfo?.list?.find(
                (item) => item.path === href.pathname
            );

            if (
                item &&
                breadcrumbList.findIndex(
                    (detail) => detail.path === item.path
                ) === -1
            ) {
                setBreadcrumbList([item, ...breadcrumbList]);
            }
        });

        const onCloseHanlde = (event: React.MouseEvent<HTMLElement>,index: number) => {
            event.preventDefault();
            //    console.log(breadcrumbList.splice(index, 1))
            if(breadcrumbList[index].path === href.pathname) {
                return
            }

            setBreadcrumbList((oldValue) => {
                return oldValue.filter((_, i) => i !== index);
            });
        };

        const onclickHandle = (item: $api.user.menuList) => {
            navigate(item.path);
        };

        const tabList = breadcrumbList.map((item, index) => (
            <Tag
                key={item.path}
                className={`${
                    item.path === href.pathname ? style.tagActive : ""
                }`}
                closeIcon
                onClick={() => onclickHandle(item)}
                onClose={(e) => {
                    onCloseHanlde(e, index);
                }}
            >
                {item.name}
            </Tag>
        ));

        return <>{tabList}</>;
    }
    return (
        <>
            <div className={`${style.tagWrap} flex w-full items-center`}>
                <List />
            </div>
        </>
    );
}
