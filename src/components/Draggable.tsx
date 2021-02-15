import * as React from "react";
import { useState } from "react";

export const Draggable = (props: { start: [number, number], children: any }) => {
    const [position, setPosition] = useState([0, 0]);

    const onMove = (e: any) => {
        const x = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
        const y = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;

        if (x >= props.start[0]) {
            setPosition([x - props.start[0], y - props.start[0]]);
        }
    };

    const enableMouseDrag = () => {
        document.addEventListener('mouseup', disableMouseDrag);
        document.addEventListener('mousemove', onMove);
    };

    const disableMouseDrag = () => {
        console.log('disable');
        document.removeEventListener('mouseup', disableMouseDrag);
        document.removeEventListener('mousemove', onMove);
    };

    const enableTouchDrag = () => {
        document.addEventListener('touchend', disableTouchDrag);
        document.addEventListener('touchmove', onMove);
    };

    const disableTouchDrag = () => {
        document.removeEventListener('touchend', disableTouchDrag);
        document.removeEventListener('touchmove', onMove);
    };

    return (
        <div
            onTouchStart={enableTouchDrag}
            onMouseDown={enableMouseDrag}
            className={'draggable'}
            style={{ marginLeft: position[0], marginTop: position[1] }}>
            {props.children}
        </div>
    );
};
