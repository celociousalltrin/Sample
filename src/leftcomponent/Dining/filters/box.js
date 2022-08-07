
const Box = ({name}) => {
    return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            <p className="item">{name}</p>
            </label>
      </div>
    )
}

export default Box;

Box.defaultProps={
    name: "No record Found"
}

