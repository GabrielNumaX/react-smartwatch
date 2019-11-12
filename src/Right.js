import React from 'react';

import css from './css/right.module.css';


const Right = (props) => {

    // this comes from App.js 
    // <Right data={this.state.prodObj} and it's use here to load content

    console.log(props);

    const previewImg = props.data.colorOptions.map((item, pos) => {

        const classArr = [css.images];

        if(pos === props.previewImagePos){

           classArr.push(css.imageBorder); 
        }

        return(
            <img key={pos} 
                className={classArr.join(' ')} 
                src={item.imageUrl} 
                alt={item.styleName} 

                //this func comes from App.js passes as props

                onClick={() => props.colorOption(pos)}/>
        );

    })

    const buttons = props.data.featureList.map((item, pos) => {

        const classArr = [css.button];

        if(pos === props.selectedButton){

            classArr.push(css.activeButton)
        }

        return(
        <button key={pos} 
                className={classArr.join(' ')}
                onClick={() => props.featureDisplay(pos)}>{item}
        </button>
        );



    })

    return(
        <aside className={css.right}>

            {/* following with the use of props -> see above comments */}
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>

            {previewImg}

            <h3>Features</h3>

            <div>
                {buttons}
             </div>

            <button className={css.buyButton}>Buy Now</button>

        </aside>



    );
}

export default Right;