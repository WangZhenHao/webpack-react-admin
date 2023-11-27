import "./index.scss";

interface SoltProps {
    header?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
}

export default function App(props: SoltProps) {
    const header = props.header ? (
        <div className="page-layout_header">
            <div className="header-block">{props.header}</div>
        </div>
    ) : null;

    const content = props.content ? (
        <div className="page-layout_table">{props.content}</div>
    ) : null;

    const footer = props.footer ? (
        <div className="page-layout_footer">{props.footer}</div>
    ) : null;

    return (
        <>
            <div className="page-layout">
                {header}
                {content}
                {footer}
            </div>
        </>
    );
}
