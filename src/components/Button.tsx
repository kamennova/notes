import * as React from "react";

export const Button = (props: { onClick: () => void, label: string, icon?: string, color?: string }) => (
    <button className='btn' onClick={props.onClick} style={{ backgroundColor: props.color }}>
        {props.icon && <i className={'fa ' + props.icon}/>}
        {props.label}
    </button>
);
