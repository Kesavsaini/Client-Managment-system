import React from 'react'
import './PendingRequest.scss';
import PendingRequestElement from './PendingRequestElement/PendingRequestElement';

const pendingRequests=[
    {
        id: 1,
        title:"Xyz Comapany",
        date:"2 days ago",
        details: "This is that those do this right now"
    },
    {
        id: 2,
        title:"Xyz Comapany2",
        date:"2 days ago",
        details: "This is that those do this right now"
    },
    {
        id: 3,
        title:"Xyz Comapany3",
        date:"2 days ago",
        details: "This is that those do this right now"
    },
 
]

const PendingRequest = () => {
  return (
    <div className='pendingRequestBox'>
          <div className='title'>Pending request</div>
          <div className='pRequestList'>
          {
            pendingRequests.map(({id,title,details,date}) => {
                return <PendingRequestElement key={id} title={title} details={details} date={date}/>
            })
          }
          </div>
    </div>
  )
}

export default PendingRequest