
const SortByMock = (filt,Amount) => {
    switch(filt) {
        case "HighToLow":
            return Amount.sort((a,b)=> b.avg_selling_price -a.avg_selling_price);

        case "LowToHigh":
            return Amount.sort((a,b)=> a.avg_selling_price -b.avg_selling_price);

        default:
            return Amount.sort((a,b)=> b.popularity -a.popularity); 
    }
}

export default SortByMock;