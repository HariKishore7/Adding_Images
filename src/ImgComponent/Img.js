import React, { Component } from "react";

import "./Img.css";

export default class Images extends Component {
  constructor() {
    super();
    this.state = {
      urlofImgs: [
        
      ],
      currUrl:"",
    };
  }

  link = (e) => {
    e.preventDefault();
    this.setState({
      imageUrl: e.target.value
    });
  };

  addImg = (e) => {
    e.preventDefault();
    const ArrayImg = this.state.urlofImgs;
    
    ArrayImg.push(this.state.imageUrl);
    this.setState({
      ArrayImg: ArrayImg
    });
  };  
    
  deleteImg=(ids)=>{
    var image_x = document.getElementById(ids);
    image_x.parentNode.removeChild(image_x);
  }    

  render() {
    const urlofImgs = this.state.urlofImgs;
    const images = urlofImgs.map((link, newKey) => {
      return (
        <span>
          <img className="AddImages" alt="newImg" src={link} key={newKey} />
          <button className="DeleteImg" onClick={()=>this.deleteImg(this.id)}>X</button>
      </span>
      )
    });
    return (
      <div className="Images">
        <input type="text" className="input" placeholder="Paste an URL to add an Image"
          onChange={this.link}
        ></input><br/>
        <button className="AddImg" type="Submit" onClick={this.addImg}>
          Click here to Add
        </button>
        {images}
      </div>
    );
  }
}
