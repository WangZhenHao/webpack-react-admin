import './index.scss';

interface SoltProps {
    header?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
}

export default function App(props: SoltProps) {
    
    const header = props.header ? props.header : null;

    const content = props.content ? props.content : null;

    const footer = props.footer ? props.footer : null;

    return (
        <>
            <div className="page-layout">
                <div className="page-layout_header">
                    <div className="header-block">{header}</div>
                </div>
                <div className="page-layout_table">{content}</div>
                <div className="page-layout_footer">{footer}</div>
            </div>
        </>
    );
}
