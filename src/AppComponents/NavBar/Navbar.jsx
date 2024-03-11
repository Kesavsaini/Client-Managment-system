import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
   <div className='navbox'>
     <div className='navleftBox'>
        <img src={require('../../Photos/BlzitCenter-1.png')} alt="" className='navorgLogo'/>
     </div>
     <div className="navrightBox">
     <img src={require('../../Photos/myPhotoResized.jpg')} alt="" className='navuserLogo'/>
     </div>
   </div>
  )
}

export default Navbar