import { useState } from "react";
import * as React from "react";
import { BoardInfo } from "../types/BoardInfo";
import { Button } from "./Button";
import { Checkbox, FormControl } from "./inputs/FormControl";
import { Modal } from "./Modal";

export const NewBoard = (props: { onCreate: (n: string, p: boolean|undefined) => void, onClose: () => void }) => {
    const [newBoard, setNewBoard] = useState<BoardInfo>({ name: '', itemsCount: 0, isProtected: false });
    const setName = (v: string) => setNewBoard({ ...newBoard, name: v });
    const setProtected = (b: boolean) => setNewBoard({ ...newBoard, isProtected: b });

    const create = () => {
        props.onCreate(newBoard.name, newBoard.isProtected);
        props.onClose();
    };

    return (
        <Modal onClose={props.onClose}>
            <h3>New Board</h3>
            <FormControl value={newBoard.name} setValue={setName} label={'Board name'}/>
            <Checkbox value={newBoard.isProtected || newBoard.isProtected !== undefined} onChange={setProtected}>Protected</Checkbox>
            <Button label={'Submit'} onClick={create}/>
        </Modal>
    );
};
