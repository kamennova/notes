import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { NewBoard } from "../components/NewBoard";
import { PageHeader } from "../components/PageHeader";
import { BOARDS } from "../Data";
import { BoardInfo } from "../types/BoardInfo";

export const Home = () => {
    const [boards, setBoards] = useState<BoardInfo[]>(BOARDS);

    const [showModal, setShowModal] = useState(false);
    const displayModal = () => setShowModal(true),
        hideModal = () => setShowModal(false);

    const createBoard = (n: string, isProtected: boolean|undefined) => {

    };

    return (
        <div className={'page-container page-wrapper'}>
            <PageHeader title={'My boards'}>
                <Button onClick={displayModal} label={'New board'} icon={'fa-plus'}/>
            </PageHeader>

            <section>
                <ul className={'list boards-list'}>
                    {boards.map((item) => <BoardItem {...item} />)}
                </ul>
            </section>

            {showModal && <NewBoard onClose={hideModal} onCreate={createBoard}/>}

            <Footer/>
        </div>
    );
};

const BoardItem = (props: BoardInfo) => (
    <Link to={'/editor/' + props.name}>
        <li className={'board-item'} key={props.name}>
            <h3 className={'board-name'}>
                {props.icon && <i className={'fa ' + props.icon} style={{background: props.color}} />}
                <br/>{props.name}</h3>
            <span className={'board-detail'}>{props.itemsCount} items</span>
        </li>
    </Link>
);
