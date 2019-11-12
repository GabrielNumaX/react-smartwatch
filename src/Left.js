import React from 'react';

import css from './css/left.module.css';


const Left = (props) => {

    // console.log(props)

    const currentHour = new Date().getHours() > 9 ? 
    new Date().getHours() : 
    '0' + new Date().getHours();

    const currentMinute = new Date().getMinutes() > 9 ?
    new Date().getMinutes() :
    '0' + new Date().getMinutes();

    return(
        <aside className={css.left}>

            <img className={css.img} src={props.url} alt="watch">

            </img>

            {
                props.showHeart ?

                <div className={css.heart}>
                    <i class="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>
                
                :

                <div className={css.time}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>

            }

        </aside>

    );
}

export default Left;