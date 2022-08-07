import CustomButton from "../../shared/container/custombutton";
import {Link} from "react-router-dom"

const twoLines = {height: "50px", width:"100%", overflow: "hidden"}

const ProductCard = (props) => {
    const {image_url,display_name,avg_selling_price,avg_mrp,handlePlus,product_code} = props
    const IMAGE ="https://www.jiomart.com/"+image_url;

    return(
        <div className="col-sm-1 col-md-4 col-lg-3 mb-4">
        <div className="card bg-light p-3 mt-2" style={{width: "100%"}}>
            <Link to={`/Dining/${product_code}`}>
                {<img src={IMAGE} className="card-img-top" alt="Dining"  height ="165px" />}
            </Link>
            
            <div className="card-body">

                <Link className="card-title text-decoration-none text-dark" to ={`/Dining/${product_code}`}>
                    {<h5 style={twoLines}>
                        {display_name}
                    </h5>}
                    </Link>

                <div className="d-flex justify-content-between mb-4">
            <div className="font-weight-bold"> ₹ {avg_selling_price} </div>
            <div className="font-weight-light">
            <p>M.R.P: <del>₹ {avg_mrp}</del></p>
            </div>
            </div>
                <CustomButton handleAdd={()=>handlePlus(props)}/>
         </div>

        </div>
        </div>
        )
} 

export default ProductCard; 

ProductCard.defaultProps = {
    image_url:" ",
    display_name:"Default",
    avg_selling_price:"00.00",
    avg_mrp:"0.00",
}