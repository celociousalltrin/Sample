import { useEffect } from "react";
import CustomAPI from "../shared/container/baseAPISetup";

const FetchDataConsume = () =>{
    useEffect(()=>{
        CustomAPI
        .get( "/DiningList")
        .then((data)=>{
            console.log(data);
       })
       .catch((err)=>{
        console.log(err);
       })
    },[]);
}

export default FetchDataConsume;  