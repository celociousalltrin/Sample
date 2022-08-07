import { useState,useEffect } from "react";
import CustomAPI from "../shared/container/baseAPISetup"
import { Link } from "react-router-dom";

const Cart = () => {
    const [data,setData]= useState([])
    const [isChange,setIsChange] = useState(true)
    useEffect (()=>{
        CustomAPI.get("/cart")
        .then ((res)=>setData(res.data)) 
    },[isChange])

    const handleDelete = (para) => {
        CustomAPI.delete(`cart/${para}`)
        .then (()=>{setIsChange(!isChange)})
    }
    
    const renderIteration = () => {
 
    return data.map((item)=> {
        const IMAGE ="https://www.jiomart.com/"+ item.image_url;
        //const twoLines = {height: "50px", width:"100%", overflow: "hidden",}
        return (
    <div key={item.product_code}>
        <div className="d-flex mb-5">

        <img src={IMAGE} className="card-img-top col-2" alt="Dining"  height ="100px" />
        <div className="col-8">
        
        <Link className="text-decoration-none text-dark" to={`/Dining/${item.product_code}`}>
            {<h6>{item.display_name}</h6>}
        </Link>
        <div className="d-flex mb-2">
        <div className="font-weight-bold text-success" style={{fontSize:"120%"}}> 
              <h6>₹ {item.avg_selling_price}</h6> 
        </div>
        <div className="text-monospace ml-4">
            <h6>QTY:{item.order_qty}</h6>
        </div> 
        </div> 
        <div className="d-flex mb-1">
        <p className="font-weight-light" style={{fontSize:"90%"}}>
            M.R.P: <del>₹ {item.avg_mrp}</del></p>
        <button className="btn btn-danger btn-sm ml-5" 
         onClick={()=>handleDelete(item.id)}
         >Remove</button>
        </div>  
        </div>
        </div>
        </div>

        )
 })
 }
    return (
        <div>
              <h3 className="mt-5 ml-5 mb-4"><b>My Cart</b></h3>
              <div className="mt-4">
      <ul className="list-group">{renderIteration()}</ ul>
      </div>
        </div>
    )
}

export default Cart;

