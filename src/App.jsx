import Details from "./components/details";
import Image from "./components/image";
import axios from "axios";
import { useState } from "react";

export default function App(){
  const [userInfo,setUserInfo] = useState();

  const getData = async ()=>{
    const response = await axios.get("https://randomuser.me/api/")
    console.log(response);
  }
  getData()


  return(
    <div>
      <p>alma</p>
      <Image/>
      <Details/>
      <button>Generate new user</button>
    </div>
  )


}

