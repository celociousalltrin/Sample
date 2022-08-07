import {HashRouter,Route,Routes,NavLink} from "react-router-dom";
import DiningPage from "../pages/dining";
import Cart from "../cart";
import PageNotFound from "../pages/404";
import ProductDetails from "../pages/ProductDetails";

const Navigation = () => {
    
let operative = "text-white nav-link active ml-3 text-monospace"
let inOperative = "text-secondary nav-link ml-3 text-monospace font-weight-bold"
    return (
<HashRouter>
 <nav className="navbar bg-primary navbar-dark" >
   <div className="navbar-brand d-flex justify-content-between" href="#">
   <button className="navbar-toggler" type="button" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
    </button>

        <img src="https://www.jiomart.com/assets/version16548039193/smartweb/images/jiomart_logo_beta.svg"  alt="img" className="ml-5"/>
            
        <div className="input-group mb-3 ml-5">
            <input type="text" className="form-control " style={{width: "650px"}} placeholder="Search essentials,groceries, and more..."  aria-describedby="basic-addon2" />
        <div className="input-group-append">
            <span className="input-group-text bg-light font-weight-bold">≡</span>
           </div>
           </div>
             <a className="navbar-brand text-white ml-5 text-monospace" href="#">Sign in/Sign up</a>
             <NavLink className={({isActive}) => 
              isActive ? "text-white nav-link active ml-5 text-monospace": "text-secondary nav-link ml-5 text-monospace font-weight-bold"}  to="">Home</NavLink>
             <NavLink className={({isActive}) => 
              isActive ? operative : inOperative}  to="/cart">Cart</NavLink>
 
    </div>
 </nav>
    <Routes>
        <Route path="" element={<DiningPage />}></Route>
        <Route path ="/cart" element = {<Cart /> }></Route>
        <Route path ="*" element = {<PageNotFound /> }></Route>
        <Route path="Dining">
            <Route path=":id" element={<ProductDetails />} />
        </Route>
    </Routes>
</HashRouter>
        
    )
}

export default Navigation;