import { useState } from "react";
import * as React from "react";

export const FormControl = (props: { value: string, setValue: (v: string) => void, label: string, name?: string }) => {
    const onChange = (e: any) => props.setValue(e.target.value);

    return (
        <p className={'form-control'}>
            <label className={'input-label'}>
                {props.label}</label>
            <input type={'text'} className={'text-input'} value={props.value}
                   onChange={onChange}/>
        </p>
    );
};

export const Checkbox = (props: { children: any, value: boolean, onChange: (v: boolean) => void }) => (
    <label className={'checkbox'}>
        <input
            onChange={() => props.onChange(!props.value)}
            checked={props.value}
            type="checkbox"
            className='checkbox-input'/>
        <span className="checkbox-marker"> {props.children} </span>
    </label>
);


type SOption = { value: string, label: string };
export const Select = (props: { options: SOption[], label: string, value?: string, onChange: (v: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const current = props.options.find(o => o.value === props.value);

    const close = () => {
        setIsOpen(false);
        document.removeEventListener('click', close);
    };

    const open = () => {
        setIsOpen(true);
        document.addEventListener('click', close);
    };

    return (
        <div onClick={isOpen ? close : open} className={'form-control select'}>
            <label className={'input-label'}>{props.label}</label>
            <select className={''}>
                {props.options.map(o => <option label={o.label} value={o.value}
                                                selected={o.value === props.value}/>)}
            </select>

            {/*<span className={'px-3 py-3'}>{current ? current.label : 'Select'}</span>*/}
            {isOpen && <ul className={''}>
                {props.options.map((item) => <li className={''}
                                                 onClick={() => props.onChange(item.value)}>{item.label}</li>)}
            </ul>}

            <i className=""/>
        </div>
    );
};

