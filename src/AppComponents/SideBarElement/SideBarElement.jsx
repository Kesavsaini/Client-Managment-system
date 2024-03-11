import React from 'react'
import './SideBarElement.scss'
import { useNavigate } from "react-router-dom";

const SideBarElement = ({title,icon,style,path}) => {
    const navigate=useNavigate();
    const urlPath= window.location.pathname;
    const handleOnlick=()=>{
        navigate(path);
    }
  return (
    <div className={`sideBarBox ${urlPath===path && 'activeClass'}`} style={style} onClick={handleOnlick}>
        <div className='sideBarIcon'>
     {icon}
     </div>
     <div className='sideBarTitle'>{title}</div>
    </div>
  )
}

export default SideBarElement