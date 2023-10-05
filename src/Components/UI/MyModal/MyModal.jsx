import { useState } from 'react'
import classes from './MyModal.module.css'
import { MyButton } from '../button/MyButton'
export const MyModal = (props) =>{

    const {children, visible, addPost = Function.prototype} = props

    
    return (
        <div className={visible ? [classes.myModal, classes.active].join(' ') : classes.MyModal}>
            <div className={classes.myModalContent}>
                {children}

                <MyButton onClick = {addPost} style = {{display : 'block', margin : '5px'}}>Закрыть</MyButton>
            </div>
            
        </div>
    )
}