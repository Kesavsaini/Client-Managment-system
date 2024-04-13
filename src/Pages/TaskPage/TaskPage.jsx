import React, { useState } from 'react';
import './TaskPage.scss';
import TaskBox from './TaskBox/TaskBox';
import Button from "../../AppComponents/Button/Button";
import AddIcon from '@mui/icons-material/Add';
import TaskModal from './TaskModal/TaskModal';

const TaskPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
    <div>
      <div className="taskHeader">
      <Button title={"Create Task"} icon={<AddIcon/>} onClick={()=>setIsModalVisible(true)}/>
      </div>
      
      <TaskBox/>
    </div>
    <TaskModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
    </>
  )
}

export default TaskPage