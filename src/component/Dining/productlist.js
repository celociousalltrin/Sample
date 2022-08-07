import ProductCard from "./productcard";
import SortByMock from "../../shared/container/buttonfilter";
import CustomAPI from "../../shared/container/baseAPISetup";
import { DataContext } from "../../pages/dining";
import { useContext } from "react";

const ProductList = ({order}) => {
    const ContextValue = useContext(DataContext)
    const DATA = SortByMock(order,ContextValue);

    const handleClick = (arg) => {
        CustomAPI
        .get(`/cart?product_code=${arg.product_code}`).then(res=>{
              res.data.length > 0 ? UpdateCart(res.data[0]) : CreateCart(arg)
        })
        }

const CreateCart = (arg) => {
    const OBJ = {
        image_url:arg.image_url,
        display_name:arg.display_name,
        avg_selling_price:arg.avg_selling_price,
        avg_mrp:arg.avg_mrp,
        product_code:arg.product_code,
        order_qty:1,
}
        CustomAPI
        .post("/cart",OBJ)
        .then(res=>console.log(res))
    }
        
    const UpdateCart = (arg) => {
      arg.order_qty = arg.order_qty+1
            CustomAPI
            .put(`/cart/${arg.id}`,arg)
            .then(res=>console.log(res))
        }
    const renderIteration = () => {
   return DATA.map((item)=>  <ProductCard key={item.product_code} {...item} handlePlus={handleClick}/>)
    } 
    return (
        <div className="p-2 bg-white mt-4">
        <div className="text-secondary font-weight-bold">ALL PRODUCTS</div>
       <div className="row"> {renderIteration()} </div>
        </div>
       )
}

export default ProductList; 

ProductList.defaultProps = {
    order:"Popularity",
} 