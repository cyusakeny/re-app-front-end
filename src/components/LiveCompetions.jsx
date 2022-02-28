import React, { useContext } from 'react';
import Profile from'/home/keny/tlfrontend/src/images/stephen-curry.jpg';
import { SocketContext } from '../utils/socketConnection';
const LiveCompetitions = (props)=>{
    const connection = useContext(SocketContext)
    const HandleClick = ()=>{
connection.emit("CreateRoom",props.id)
    }
    return(
      <div className="flex flex-row space-x-4  ml-8 w-48 pl-0.5 text-gray-600 rounded-md py-2 hover:bg-white hover:shadow-md hover:border-1" onClick={HandleClick}>
          <img src={Profile} alt="ImageProfile" className="rounded-full w-8 h-7"/>
         <p className="text-base">{props.name}</p> 
          </div>
    );
}
export default LiveCompetitions;