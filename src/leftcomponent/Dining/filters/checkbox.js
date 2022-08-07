

export const Checkbox = ({label}) => {
    return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            <p className="item">{label}</p>
            </label>
      </div>
    )
}

Checkbox.defaultProps={
    label: "No record Found"
}
