import React from 'react'
import RichTextEditor from '../../../AppComponents/RichTextEditor/RichTextEditor';
import './ClientRequest.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import DropDown from '../../../AppComponents/DropDown/DropDown';

const options=[
  {
    value:"pending"
  },
  {
    value:"progress"
  },
  {
    value:"completed"
  }
]

const ClientRequest = ({cientRequest,index,setRequests}) => {
    const deleteRequest=()=>{
        setRequests(requests=>[...requests.slice(0,index),...requests.slice(index+1)])
    }
  return (
    <div className='clientRequestBox'>
        <div className='deleteRequest' onClick={deleteRequest}>
            <DeleteIcon style={{cursor:'pointer'}}/>
        </div>
        <RichTextEditor/>
        <div className='clinetRequestSubBox'>
            <div className='RequestLeftBox'>
           <div className='clientpayment'>
             <label>Payment</label> <input type="number" defaultValue={0} style={{padding:"12px",border:"1px gray solid",borderRadius:"8px"}}/>
           </div>
           <div className='clientpayment'>
           <label>Payment Done</label> <input type="number" defaultValue={0} style={{padding:"12px",border:"1px gray solid",borderRadius:"8px"}}/>
           </div>
           </div>
           <div className='RequestRightBox'>
             <label htmlFor="" style={{fontWeight:600}}>Status</label>
             <DropDown options={options}/>
             
           </div>
        </div>
    </div>
  )
}

export default ClientRequest