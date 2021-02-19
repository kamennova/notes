import * as React from "react";
import { useState } from "react";

export const Tabs = (props: { tabs: Array<{ label: string, content: any }> }) => {
    const [current, setCurrent] = useState(0);

    return (
        <div>
            <nav className="">
                <ul className={''}>
                    {props.tabs.map((tab, i) =>
                        <li className={'tab' + (i === current ? ' current' : '')}
                            style={{ borderBottomWidth: 3 }}>
                            <button onClick={() => setCurrent(i)} className={'py-4 ouline-none focus:outline-none'}>
                                {tab.label}
                            </button>
                        </li>)}
                </ul>
            </nav>

            <div className={'content'}>
                {props.tabs.map((t, index) => <section
                    className={index !== current ? 'hidden' : ''}>{t.content}</section>)}
            </div>
        </div>
    );
};
