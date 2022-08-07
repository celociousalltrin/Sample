import {Checkbox} from "./checkbox";
import Box from "./box";
import {DiningFilterMock} from "./data"
import FilterComponent from "./RangeFilter"

const FilterList = ({handleRate}) => {
   
    const renderIteration = () => {
        return DiningFilterMock.map((element)=> <Box key={element.name} {...element}/>)
    }
    
    return (
        <div className = "container p-2 bg-white mt-4 text-dark">
            <h3 className="mb-4">Filters</h3>
            <FilterComponent handleRate={handleRate}/>
            <h5>Availability</h5>
            <Checkbox label="InStock Products"/>
            
            <h5 className="mb-2">Categories</h5>
            <div className="input-group">
            <input type="text" className="form-control mb-3" style={{width: "90%"}} placeholder="Search..."  aria-describedby="basic-addon2" />
           </div>
           
           <Checkbox label="Cups,Mugs and more"/>
           <Checkbox label="Dinnerware"/>
           <Checkbox label="Tableware"/>
           <Checkbox label="Cutlery and Serving Aids"/>
           <Checkbox label="Barware"/>
          
           <h5>Brands</h5>
           <div className="input-group mb-3">
            <input type="text" className="form-control " style={{width: "90%"}} placeholder="Search..."  aria-describedby="basic-addon2" />
           </div>
           <div className="overflow-auto mb-4" style={{height: "500px"}}>
           {renderIteration()}
       
           </div>
          
           <h5>Discount</h5>
           <div >
           <label className="form-label"/>
           <input 
           type="range" 
           className="form-range"  
           min="10" 
           max="84"
           style={{width:"90%"}} />
           </div>
        
        </div>
    )
}

export default FilterList;