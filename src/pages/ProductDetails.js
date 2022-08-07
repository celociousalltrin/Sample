import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import CustomAPI from "../shared/container/baseAPISetup"

const ProductDetails = () => {
    const {id} = useParams();
    const [data,setData] = useState([])
    const [image,setImage] = useState(null)
    
    useEffect(()=>{
        CustomAPI.get(`/DiningList`,{params: {product_code:id}})
        .then((res)=>setData(res.data))
    },[id])

    useEffect(()=>{
        CustomAPI.get(`/DiningList`,{params: {product_code:id}})
        .then((res)=>setImage("https://www.jiomart.com/" + res.data[0].image_url ))
    },[id])

    return (
        <div>
        {data.length > 0 && 
             (<div className="row mt-5">
                <div className="col-6">
                <img src= {image} className="img-fluid rounded mx-auto d-block" style={{width:"50%"}} alt="mage"></img>
             </div>
        
        <div className="col-6">
       <h3>{data[0].display_name}</h3>
        <div className="d-flex mt-3">
        <h4 className="font-weight-bold">₹ {data[0].avg_selling_price}</h4>
        <h5 className="font-weight-light ml-4">M.R.P: <del className="font-weight-bold">₹{data[0].avg_mrp}</del></h5>
        </div>
        <div className="mt-2">
        <h5 >You Save: <b className="text-success">₹ {data[0].avg_discount}</b></h5>
        </div>
        <div className="mt-3">
        <h5 >sold by <b className="text-primary">{data[0].seller_names}</b></h5>
        </div>
        </div>  
        
        </div>)}
        </div>
    )
}

export default ProductDetails;


