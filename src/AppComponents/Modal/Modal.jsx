import React, { useEffect, useState } from 'react'
import './Modal.scss'

const Modal = ({width,height,isVisible,onClose,children}) => {
  return (
    <div className='modal' style={{display:isVisible?"flex":"none"}} onClick={onClose}>
        <div className='modalBox' style={{width,height}} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal