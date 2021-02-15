import { useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { BOARDS } from "../Data";

export const Home = () => {
    const [boards, setBoards] = useState(BOARDS);
    const [showModal, setShowModal] = useState(false);
    const displayModal = () => setShowModal(true),
        hideModal = () => setShowModal(false);

    return (
        <div>
            <header className={'page-header'}>
                <h1>My boards</h1>
                <div className={'header-buttons'}>
                    <Button onClick={displayModal} label={'New board'}/>
                </div>
            </header>
            <div className={'page-wrapper'}>
                <ul className={'list boards-list'}>
                    {boards.map((item) => <Link to={'/editor/' + item.name}>
                        <li className={'board-item'} key={item.name}>
                            <h3 className={'board-name'}>{item.name}</h3>
                            <span className={'board-detail'}>{item.itemsCount} items</span>
                        </li>
                    </Link>)}
                </ul>
            </div>
        </div>
    );
};
