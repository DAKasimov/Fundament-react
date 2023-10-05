import classes from './MySelect.module.css'
export const MySelect = (props) =>{
    const {options, defaultValue, value, onChange} = props

    return (
        <select value={value} onChange={event => onChange(event.target.value)} className={classes}>
          {options.map((item)=>{
            return (
                <option key={item.value} value={item.value}>
                    {item.name}
                </option>
            )
          })}
        </select>
    )
}