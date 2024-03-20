import React, { useState } from 'react'
import './ClientModal.scss'
import Modal from '../../../AppComponents/Modal/Modal';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClientRequest from '../ClientRequest/ClientRequest';
import Button from '../../../AppComponents/Button/Button';
import AddIcon from '@mui/icons-material/Add';

const clientReuests=[
  {
    id:1,
    content:"This is content",
    payment:1230,
    payment_done:900
  }
]

const ClientModal = ({isModalVisible,setIsModalVisible}) => {
    const [clientImage,setClientImage]=useState();
    const [requests,setRequests]=useState(clientReuests);

    const addRequest=()=>{
        setRequests(prev=>[...prev,
            {
                id:prev.length+1,
                content:"",
                payment:0,
                payment_done:0
            }
        ])
    }

  return (
    <Modal isVisible={isModalVisible} onClose={()=>setIsModalVisible(false)}>
      <div className='clientModalBox'> 
      <div className='clientModalLeft'>
        <input type="file" name='clientImage' id="clientImage" accept="image/*" style={{display:"none"}}  onChange={(e)=>{
            setClientImage(URL.createObjectURL(e.target.files[0]));
            console.log(clientImage);
        }}/>
        <label htmlFor="clientImage">
       {
        clientImage ? <img src={clientImage} alt="" style={{width:"200px",height:'200px',cursor:"pointer",borderRadius:"12px"}}/> :  <AddPhotoAlternateIcon style={{width:"200px",height:'200px',cursor:"pointer"}}/>
       }
       </label>
       <Button title={"Save Changes"} style={{width:"80%"}}/>
       </div>
       <div className="clientModalRight">
          <input type="text" placeholder='Enter Client Name' className='clientNameInput'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Enter Client Details' className='clientDetailsInput'></textarea>
          {
            requests.map((clientRequest,index)=>{
              return <ClientRequest key={index} clientRequest={clientRequest} setRequests={setRequests} index={index}/>
            })
          }
          <div className='addRequestButton'>
          <Button title={"Add Request"} icon={<AddIcon/>} onClick={addRequest}/>
          </div>
       </div>
      </div>
    </Modal>
  )
}

export default ClientModal