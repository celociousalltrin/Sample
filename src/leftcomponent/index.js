import FilterList from "./Dining/filters/filter";
import Cart from "../cart/index";


const SideContainer = ({handleRate}) => {
    return(
<div>
      <FilterList handleRate={handleRate}/>
</div>
    )
}

export default SideContainer;