import {useState,useEffect} from "react";
import ProductContainer from "../component/Dining";
import SideContainer from "../leftcomponent";
import Leftcontainer from "../leftcomponent/Groceries/Index";
import Goal from "../Samp/tess"
import Counter from "../Counter/index"
import FilterComponent from "../leftcomponent/Dining/filters/RangeFilter";
import FetchDataConsume from "../example/fetchDataConsume";
import CustomAPI from "../shared/container/baseAPISetup"
import React from "react";

export const DataContext = React.createContext([])

const DiningPage = () => {
  const [price,setPrice] = useState(1000);
  const[dataList,setDataList] = useState([])
  
  
  const handlePrice = (arg) => {
    setPrice(arg)
  };

  useEffect (()=>{
    CustomAPI
    .get("/DiningList")
    .then ((res)=>setDataList(res.data))
    .catch((err)=> console.err(err))

  },[])

  const PriceFilter = (cont,arg) => {
    return cont.filter((item) => item.avg_mrp < arg);
}
const cash = PriceFilter(dataList,price)
  return (
        <div className="container-fluid row">
          <div className = "col-3 bg-light">
            <SideContainer handleRate={handlePrice}/>
          </div>

          <div className = "col-9 bg-light p-3 ">
            <FetchDataConsume />
            
            <DataContext.Provider value={cash}>
            <ProductContainer />
            </DataContext.Provider>
            
          </div>

        </div>
  )
}

export default DiningPage;