// import React, {useState} from "react";
// import "./styles.css";
// import { ClientCard } from "./ClientCard";
// import { fetchClients } from "./fetchClients";
// import ClientCard from "./CliendCard";

// export default function ClientApp() {
//   const [state,setState] = useState({
//     client: null
//   });
//   componentDidMount = () => {
//     fetchClients().then((client) => {
//       setState({
//         client
//       });
//     });
//   };
//  return(
//   {state.client?<ClientCard data={state}/>:"loading"}
//   // выведите компонент ClientCard
//     //после того, как придут данные с сервера
//  )
// }

// export default ClientApp;

import React, { useState } from "react";
import { useEffect } from "react";
import { fetchClients } from "./fetchClient";
import CliendCard from "./ClientCard";

const ClientApp = () => {
  const [state, setState] = useState({
    client: null,
  });
useEffect(()=>{fetchClients().then((client)=>{
    setState({client})
})},[])
console.log(state.client)
  return (
    <div>
      {state.client !== null ? <CliendCard  name={state.client.name} phone={state.client.phone} card={state.client.card} /> : "loading..."}
    </div>
  );
}

export default ClientApp;
