import React from "react";
import { Tooltip, Link } from '@material-ui/core';
import s from"./Header.module.scss";
import AccountIcon from '@material-ui/icons/AccountCircle';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.main}>
                <div className={s.navigation}>
                    <Link href={'/cars'} className={s.nav}>
                        <div>Автомобили</div>
                    </Link>
                    <Link href={'/drivers'} className={s.nav}>
                       <div>Водители</div>
                    </Link>
                </div>
                <Link href={'/profile'}>
                    <Tooltip title={'Профиль'}>
                        <AccountIcon
                            classes={s.account} 
                            fontSize={'large'} 
                            color={'action'} 
                        />
                    </Tooltip>
                </Link>
            </div>
        </div>            
    )
}

export default Header;