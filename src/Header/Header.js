import React from "react";
import { Button, Link } from '@material-ui/core';
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
                    <Link href={'/waybills'} className={s.nav}>
                       <div>Путевые листы</div>
                    </Link>
                </div>
                <div className={s.profile}>
                    <div>Владислав, Администратор</div>
                    <div className={s.button}>
                        <Button
                         color="secondary"
                         size={'small'}
                        >
                            Выйти
                        </Button>
                    </div>
                </div>
            </div>
        </div>            
    )
}

export default Header;