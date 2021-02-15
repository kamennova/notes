import * as React from "react";

export const Button = (props: { onClick: () => void, label: string, color?: string }) => (
    <button className='btn' onClick={props.onClick} style={{ backgroundColor: props.color }}>{props.label}</button>
);
