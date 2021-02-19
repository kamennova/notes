import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
    <header className="app-header">
        <Link to={'/'} className={'logo'}>
                <span>
                    <i className={'fa fa-sticky-note'}/><br/>
                    <span>Notes</span>
                </span>
        </Link>
        <ul className={'list menu-links'}>
            <li className={'menu-item'}>
                <Link to={'/'} className={'menu-link menu-btn'}>
                    <span><i className={'fa fa-plus'}/><br/>New</span>
                </Link>
            </li>
            <li className={'menu-item'}>
                <Link to={'/'} className={'menu-link'}>
                    <span><i className={'fas fa-border-all'}/><br/>All</span>
                </Link>
            </li>
            <li className={'menu-item'}>
                <Link to={'/'} className={'menu-link'}>
                    <span><i className={'fa fa-info'}/><br/>Tips</span>
                </Link>
            </li>
        </ul>
    </header>
);
