import React from "react";
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/dialogs' activeClassName={styles.active}>Dialogs</NavLink>
        </div>
    </nav>
    )
}


export default NavBar