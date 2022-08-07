
const CustomButton = ({handleAdd}) => {
    return (

        <button type="button" className="btn btn-primary btn-lg btn-block"
        onClick={handleAdd}>
            <div className="d-flex justify-content-between">
            <div> Add to Cart </div>
            <div className="font-weight-bold"> + </div>
            </div>
          
        </button>
    )
}

export default CustomButton;