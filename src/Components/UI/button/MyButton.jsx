import classes from './MyButton.module.css'
export const MyButton = (props) =>{
    const {children} = props
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}