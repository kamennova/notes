import * as React from "react";

export const Modal = (props: { onClose: () => void, children: any }) => {
    return (
        <div className={'modal'}>
            <button className={'close-btn'} onClick={props.onClose}>✕</button>
            {props.children}
        </div>
    );
};
