
const FilterComponent = ({handleRate}) =>{
    return( 
        <div className="mb-4">        
        <h5>Price</h5>

        <div >  
        <label className="form-label"  htmlFor="customRange1"/>
        <input type="range" className="form-range"  min="10" max="2000" 
        id="customRange1" step="1"
        onChange={(e) => handleRate(e.target.value)}
        style={{width:"90%"}} />
        </div>

        </div > 
    )
}
 
export default FilterComponent;