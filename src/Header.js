import React from 'react';
import css from './css/header.module.css';

const Header = () => {

    return(
        
        <header className={css.header}>
            <img className={css.img}
                alt="amazon" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png">
            </img>
        </header>
    )
}

export default Header;