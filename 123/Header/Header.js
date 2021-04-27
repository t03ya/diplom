import React from "react";
import { Tooltip, Link } from '@material-ui/core';
import s from"./Header.module.scss";
import AccountIcon from '@material-ui/icons/AccountCircle';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.main}>
                <Link href={'/profile'}>
                    <Tooltip title={'Профи1ль'}>
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