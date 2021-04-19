import React from "react";
import {withRouter} from "react-router-dom"  // return a modifiy components with match,location,history functionlity 
import "./menu-item.style.scss";

const MenuItem = ({title,imageUrl,size,hisotry,linkUrl,match}) => (
    <div className={`${size} menu-item`} onClick={()=> hisotry.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)
export default withRouter(MenuItem);