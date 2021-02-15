import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { DataGraph } from "../components/DataGraph";
import { DATA } from "../Data";

export const Editor = () => {
    const [startCoords, setStartCoords] = useState<[number, number]>([30, 0]);
    const [data, setData] = useState(DATA);
    const [selected, setSelected] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    const createCategory = () => {
        // todo
    };

    const save = () => {
        // todo
    };

    const corner = useRef(null);

    useEffect(() => {
        if (corner.current && corner.current !== null) {
            // @ts-ignore
            const coords = corner.current.getBoundingClientRect();
            setStartCoords([30, coords.y]);
        }
    }, []);

    return (
        <div>
            <header className={'display-header'}>
                <h1 className={'board-title'}>{data.name}</h1>
                <div className={'editor-buttons'}>
                    <Button onClick={toggleForm} label={'Add item'}/>
                    <Button color={'purple'} onClick={save} label={'Save changes'}/>
                </div>
            </header>
            <div className={'blocks-wrapper'} ref={corner}>
                <DataGraph data={data}/>
            </div>
        </div>
    );
};
