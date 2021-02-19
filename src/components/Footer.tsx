import * as React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
    <footer className={'main-footer'}>
        <p>
            <Link to={'/'}><span><i className={'fa fa-sticky-note'}/><i>notes</i></span></Link>
            is an app for creating visually intuitive syllabus
        </p>
        <span>© 2021 <i>notes</i>. All rights reserved</span>
    </footer>
);
