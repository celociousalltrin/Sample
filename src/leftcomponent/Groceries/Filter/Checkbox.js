export const CheckList = ({label}) => {
    return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            <p className="item">{label}</p>
            </label>
      </div>
    )
}

CheckList.defaultProps={
    label: "No record Found"
}