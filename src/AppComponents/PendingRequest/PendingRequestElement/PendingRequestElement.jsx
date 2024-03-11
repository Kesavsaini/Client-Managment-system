import React from 'react'
import './PendingRequestElement.scss'
const PendingRequestElement = ({title,date,details}) => {
  return (
    <div className='PendingrequestElementBox'>
     <div className='titleBox'>
        <div className='requestTitle'>{title}</div>
        <div className='date'>{date}</div>
     </div>
      <div className='pRequestDetails'>{details}</div>
    </div>
  )
}

export default PendingRequestElement