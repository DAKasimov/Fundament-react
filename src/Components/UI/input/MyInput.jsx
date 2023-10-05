import classes from './MyInput.module.css'
export const MyInput = (props) =>{
    const {} = props
    return (
        <input className={classes.myInput} {...props} type="text" />
    )
}