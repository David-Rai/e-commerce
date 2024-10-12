import React, { useEffect } from "react";
import { sendName } from "./api/index.js";
import { useDispatch } from "react-redux";
import { addUser,deleteUser,removeAlluser } from "./store/userSlice.jsx";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { addDate } from "./store/DateSlice.jsx";

const App = () => {
  const dispatch = useDispatch();
  const data=useSelector((state)=> state.user )
  const date=useSelector((state)=> state.date)
  
  //adding the user
  const addRandomUser = (name) => {
    dispatch(addDate(sendDate()))
    dispatch(addUser(name))
  };
  const sendDate=()=>{
    return new Date().getTime()
  }


  return (
    <main className=" flex flex-col items-center justify-center h-screen w-full bg-blue-200">
      <div className="center h-auto rounded-md w-[30%] bg-purple-300 py-3 px-4">
        <div className="top flex w-full items-center justify-around">
          <h1 className="text-2xl">Add random users</h1>
          <button
            onClick={() => addRandomUser(sendName())}
            className="h-[100%] text-white rounded-md py-3 
    transtion-all ease duration-100
    w-[120px]  bg-purple-600 hover:bg-purple-400"
          >
            ADD USER
          </button>
        </div>

      <ul className="list-decimal px-3">
          {
            data&&data.map((d,index)=>{
              return (
              <div  key={index} className="flex items-center justify-between bg-slate-100 px-10 py-3 my-3 rounded-md">
                <p>{date[index]}</p>
                <li>{d}</li>
              <MdDeleteOutline className="text-red-600" onClick={()=> dispatch(deleteUser(index))}/>
              </div>
              )
            })
          }
        </ul>
        {
          data.length > 0 && 
          <button 
          onClick={()=> dispatch(removeAlluser())}
          className="h-11 w-[120px] bg-red-600
           text-white rounded-md float-right">Delete all  </button>
        }
      </div>
    </main>
  );
};

export default App;
