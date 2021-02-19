import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { DataGraph } from "../components/DataGraph";
import { FormControl, Select } from "../components/inputs/FormControl";
import { Modal } from "../components/Modal";
import { PageHeader } from "../components/PageHeader";
import { DATA } from "../Data";

export const Editor = () => {
    const [startCoords, setStartCoords] = useState<[number, number]>([30, 0]);
    const [data, setData] = useState(DATA);
    const [selected, setSelected] = useState([]);

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    const createItem = (n: string) => {
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
            <div className={'page-wrapper'}>
                <PageHeader title={data.name}>
                    <Button onClick={toggleForm} label={'Add item'}/>
                    <Button color={'purple'} onClick={save} label={'Save changes'}/>
                </PageHeader>
            </div>

            <div className={'blocks-wrapper'} ref={corner}>
                <DataGraph data={data}/>
            </div>

            {showForm && <NewItem onAdd={createItem} onClose={toggleForm} options={data.nodes.map(n =>
                ({ label: n.label, value: n.id.toString() }))}/>}
        </div>
    );
};

const NewItem = (props: { onClose: () => void, options: { value: string, label: string }[], onAdd: (n: string) => void }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [parent, setParent] = useState<string | undefined>(undefined);

    const onAdd = () => {
        props.onAdd(name);
        props.onClose();
    };

    return (
        <Modal onClose={props.onClose}>
            <h2>New item</h2>
            <FormControl value={name} setValue={setName} label={'Name'}/>
            <FormControl value={desc} setValue={setDesc} label={'Description'}/>
            <Select options={props.options} value={parent} onChange={setParent} label={'Parent'}/>
            <Button onClick={onAdd} label={'Add'}/>
        </Modal>
    );
};
