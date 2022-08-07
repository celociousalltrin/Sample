

const Child = ((Data)=>{
    const {avg_mrp,avg_selling_price} = Data
    return (
        <div>
        <h1>
   The actual mrp is {avg_mrp}
        </h1>
        <h2>The discount price is {avg_selling_price}</h2>
        </div>
    )
}) 

export default Child;