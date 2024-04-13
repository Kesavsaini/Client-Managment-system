import React, { useState } from 'react'
import './TaskModal.scss'
import Modal from '../../../AppComponents/Modal/Modal';
import Input from '../../../AppComponents/Input/Input';
import DropDown from '../../../AppComponents/DropDown/DropDown';
import Button from '../../../AppComponents/Button/Button';

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
const TaskModal = ({isModalVisible,setIsModalVisible}) => {

  return (
    <Modal isVisible={isModalVisible} height={"56vh"} width={"40vw"} onClose={()=>setIsModalVisible(false)}>
      <div className='taskModal'>
        <input type="text" placeholder='Enter Task Name' className='taskNameInput'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Task' className='taskDetailsInput'></textarea>
        <Input/>
        <DropDown options={options}/>
        <div>
        <input type="date" placeholder='Deadline' className='calender' />
        </div>
        <Button title={"Save"} style={{padding:"4px 36px"}}/>
      </div>
    </Modal>
  )
}

export default TaskModal