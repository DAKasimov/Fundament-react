import { useContext } from "react"
import { MyButton } from "../Components/UI/button/MyButton"
import { MyInput } from "../Components/UI/input/MyInput"
import { AuthContext } from "../context"
export const Login = () =>{
    const {setIsAuth, isAuth} = useContext(AuthContext)

    const login = (event) =>{
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form action="">
                <MyInput type="text" placeholder="Введите логин..." />
                <MyInput type="password" placeholder="Введите пароль..." />
            
                <MyButton onClick = {()=>setIsAuth(true)}>Войти</MyButton>
            </form>
        </div>
    )
}