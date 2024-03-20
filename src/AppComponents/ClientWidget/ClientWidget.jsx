import React from "react";
import "./ClientWidget.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuCard from "../../MenuCard/MenuCard";

const RequestNumber=({name,value,color})=>{
  return(
    <div className="requestNumberBox">
    <div>{name}</div>
    <div style={{color,fontWeight:"bolder"}}>{value}</div>
  </div>
  )
}

const requestTypeArayy=[
  {
    name: "Pending",
    value: 13,
    color: "red"
  },
  {
    name: "Progress",
    value: 20,
    color: "yellow"
  },
  {
    name: "Completed",
    value: 14,
    color: "green"
  }
]

const menuItems=[
  {
    title:"Edit Client",
    onClick:()=>{
         console.log("Client has been updated")
    }
  }
]

const ClientWidget = ({
  title,
  logo,
  pending,
  progress,
  completed,
  revenue,
  payment_pending,
}) => {
  return <div className="clientWidgetBox">
  <div className="leftClientBox">
    <div className="clientLogoBox">
      <img src={logo} alt="" className="orgLogo" style={{height:'100%', width:"100%",borderRadius:"12px"}}/>
    </div>
    <div>
      <div className="clientTitle">{title}</div>
      {/* <div className="clientRevenue"><span style={{fontWeight:"600"}}>Revenue:</span>{revenue}</div> */}
    </div>
  </div>
  <div className="rightClientBox">
    <div className="requestType">
    {
      requestTypeArayy.map((item,index)=>{
        return(
          <RequestNumber key={index} name={item.name} value={item.value} color={item.color}/>
        )
      })
    }
    </div>
    <div className="clientRevenue"><span style={{fontWeight:"600"}}>Revenue:</span>{revenue}</div>
    <div>
      <span style={{fontWeight:"600"}}>
      Payment Pending: </span> {payment_pending}
    </div>
  </div>
  <div className="clientWidgetMenueDots">
  <MoreVertIcon/>
  </div>
  <MenuCard menueItems={menuItems}/>
  </div>;
};

export default ClientWidget;
