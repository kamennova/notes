import * as React from "react";

export const PageHeader = (props: {title?: string, children?: any}) => (
    <header className={'page-header'}>
        <h1>{props.title}</h1>
        <span className={'delimiter'}>&#8759; &#8759; &#8759;</span>
        <div className={'header-buttons'}>
            {props.children}
        </div>
    </header>
);
