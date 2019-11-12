import React from 'react';
import { Component } from 'react';
import './App.css';

import Header from './Header';
import Left from './Left';
import Right from './Right';

import ProductData from './ProductData';

class App extends Component {

  state = {
    prodObj: ProductData,
    showHeart: false,
    previewImagePos: 0,
    selectedButton: 0,

  }

  //this func is created and passes as props to Right.js
  //this is to set preview image on Left

  colorOption = (pos) => {

    console.log('click');

    this.setState({previewImagePos: pos});
  }

  // this is to show/hide time/heart

  featureDisplay = (pos) => {

    //condition to update state based on which
    //button is clicked

    let updatedState = false;
  
    if(pos === 1){
     updatedState = true;
    }

    this.setState({showHeart: updatedState, selectedButton: pos});

  }

  render() {

    return (

      <div>
        <Header></Header>
        <main className="main">
          {/* the [] passes the pos to load image url from props obj */}
          <Left url={this.state.prodObj.colorOptions[this.state.previewImagePos].imageUrl} 
                showHeart={this.state.showHeart}>

          </Left>

          {/* data props passes the whole obj to use in Right.js */}
          <Right data={this.state.prodObj} 
                // this is the func passes as props to show preview imgs in Left
                colorOption={this.colorOption}
                previewImagePos={this.state.previewImagePos}
                // this is for the buttons
                featureDisplay={this.featureDisplay}
                // this is to handle class active for buttons
                selectedButton={this.state.selectedButton}>

          </Right>
  
  
        </main>
  
      </div>
      
    );

  }
  
}

export default App;
