import { CheckList } from "./Checkbox";
import BoxList from "./Box";
import { GroceriesFilterMock } from "./Data";

const SortList = () => {
    const renderIteration = () => {
        return GroceriesFilterMock.map((element)=> <BoxList key={element.name} {...element}/>)
    }
    return (
        <div className = "container p-2 bg-white mt-4 text-dark">
            <h3 className="mb-4">Filters</h3>
            
            <h5>Availability</h5>
            <CheckList label="InStock Products"/>
            
            <h5 className="mb-2">Categories</h5>
            <div className="input-group">
            <input type="text" className="form-control mb-3" style={{width: "90%"}} placeholder="Search..."  aria-describedby="basic-addon2" />
           </div>
           <div className="overflow-auto mb-3" style={{height: "300px"}}>
           {renderIteration()}
          </div>
           <h5>Brands</h5>
           <div className="input-group mb-3">
            <input type="text" className="form-control " style={{width: "90%"}} placeholder="Search..."  aria-describedby="basic-addon2" />
           </div>
           
           <CheckList label="Cups,Mugs and more"/>
           <CheckList label="Dinnerware"/>
           <CheckList label="Tableware"/>
           <CheckList label="Cutlery and Serving Aids"/>
           <CheckList label="Barware"/>
           <h5>Price</h5>
           <div >
           <label className="form-label"  class="form-label"/>
           <input type="range" className="form-range"  min="21" max="44,952" style={{width:"90%"}} />
           </div>
           
           <h5>Discount</h5>
           <div >
           <label className="form-label"/>
           <input type="range" className="form-range"  min="0" max="84" style={{width:"90%"}} />
           </div>
        
        </div>
    )
}

export default SortList;