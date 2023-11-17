
import * as AllIcon from "@ant-design/icons"
import React from "react";

export default function Icon(props: { icon: string, className?: string }) {
    const { icon, className } = props;
    const antIcon: { [key: string]: any } = AllIcon;

    return React.createElement(antIcon[icon], { className });
}