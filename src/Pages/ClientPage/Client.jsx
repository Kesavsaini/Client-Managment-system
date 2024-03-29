import React, { useState } from "react";
import "./Client.scss";
import ClientWidget from "../../AppComponents/ClientWidget/ClientWidget";
import Button from "../../AppComponents/Button/Button";
import AddIcon from '@mui/icons-material/Add';
import ClientModal from "./ClientModal/ClientModal";

const clients = [
  {
    id: 1,
    title: "Xyz pvt Limited",
    logo: "https://i.pinimg.com/736x/bf/33/97/bf3397ccd1e46d118fe4cf487192275e.jpg",
    pending: 12,
    progress: 7,
    completed: 15,
    revenue: 1000,
    payment_pending: 3200,
  },
  {
    id: 2,
    title: "ABC pvt Limited",
    logo: "https://i.pinimg.com/736x/6b/83/af/6b83af7d8b1da720f95c0e559af05e44.jpg",
    pending: 12,
    progress: 7,
    completed: 15,
    revenue: 1000,
    payment_pending: 3200,
  },
  {
    id: 3,
    title: "123 pvt Limited",
    logo: "data:image/png;base64,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",
    pending: 12,
    progress: 7,
    completed: 15,
    revenue: 1000,
    payment_pending: 3200,
  },
  {
    id: 4,
    title: "ToBeFair pvt Limited",
    logo: "data:image/png;base64,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",
    pending: 12,
    progress: 7,
    completed: 15,
    revenue: 1000,
    payment_pending: 3200,
  },
  {
    id: 5,
    title: "NotMine pvt Limited",
    logo: "https://ichef.bbci.co.uk/images/ic/1200x675/p03t1sm8.jpg",
    pending: 12,
    progress: 7,
    completed: 15,
    revenue: 1000,
    payment_pending: 3200,
  },
];
const Client = () => {
  const [isModalVisible,setIsModalVisible]=useState(false);
  const [clientArray,setClientArray]=useState(clients);

  return (
    <>
    <div>
      <div className="clientHeader">
         <Button title={"Create Client"} icon={<AddIcon/>} onClick={()=>setIsModalVisible(true)}/>
      </div>
      <div className="clientList">
      {clientArray.map(
        ({
          id,
          title,
          logo,
          pending,
          progress,
          completed,
          revenue,
          payment_pending,
        }) => (
          <ClientWidget
            key={id}
            title={title}
            logo={logo}
            pending={pending}
            progress={progress}
            completed={completed}
            revenue={revenue}
            payment_pending={payment_pending}
          />
        )
      )}
      </div>
    </div>
    <ClientModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
    </>
  );
};

export default Client;
