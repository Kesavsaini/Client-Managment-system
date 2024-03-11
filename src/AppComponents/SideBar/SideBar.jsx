import React from 'react'
import './SideBar.scss'
import SpeedIcon from '@mui/icons-material/Speed';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SideBarElement from '../SideBarElement/SideBarElement';
const SideElement=[
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: <SpeedIcon/>
  },
  {
    id: 2,
    title: 'Client',
    path: '/client',
    icon: <CorporateFareIcon/>
  },
  {
    id: 3,
    title: 'Tasks',
    path: '/tasks',
    icon: <AssignmentTurnedInOutlinedIcon/>
  },
]
const SideBar = () => {
  return (
    <div className='sidebox'>
      <div className='sideElementsClass'>
      {
        SideElement.map(({title,icon,id,path}) => {
          return <SideBarElement key={id} title={title} icon={icon} path={path}/>
        })
      }
    </div>
    </div>
  )
}

export default SideBar