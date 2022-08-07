
import { useState } from "react";
import ProductList from "./productlist"; 


const URL ="https://www.jiomart.com/images/category/1712/dining-20220519.jpeg";

const ProductContainer = () =>{
    const [sort,setSort] = useState('Popularity')
    const handleSort = (arg) => {  
  setSort(arg)
    }
    return(
        
        <div className="p-3">
           <img src= {URL} alt = "Dining" className="img-fluid" style={{width:"100%"}}/>
           <div className="d-flex justify-content-end my-3 align-items-center">
            Sort by: 
            <button onClick={()=>handleSort("Popularity")} className="btn btn-outline-primary mx-2">Popularity</button>
            <button onClick={()=>handleSort("HighToLow")} className="btn btn-outline-primary mx-2">High to Low</button>
            <button onClick={()=>handleSort("LowToHigh")} className="btn btn-outline-primary mx-2 ">Low to High</button>
           </div>
           <ProductList order={sort}  />
         </div>
    )  
}

export default ProductContainer;