import { Link } from "react-router-dom"
import { MyButton } from "../button/MyButton"
import { AuthContext } from "../../../context"
import { useContext, useEffect } from "react"
export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const handleClick = () =>{
    setIsAuth(false)
  }

  const logout = () =>{
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  

  return (
    <div className="navbar">
      {isAuth ? (
          <MyButton onClick={logout}>Выйти</MyButton>
      ) : (
        ""
      )}
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  )
}
