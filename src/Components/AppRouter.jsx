import { Switch, Route } from "react-router-dom"
import { About } from "../pages/About"
import { PostPage } from "../pages/PostsPage"
import { NotFound } from "../pages/NotFound"
import { PostIdPage } from "../pages/PostIdPage"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { privateRoutes, publicRoutes } from "../router/index"
import { useContext } from "react"
import { AuthContext } from "../context"
import { Loader } from "./UI/Loader/Loader"
export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  
  if (isLoading){
    return <Loader/>
  }
  return (
    <div>
      {isAuth 
      ? 
      <Switch>
        {privateRoutes.map((item)=>{
          return <Route
          component = {item.component}
          path = {item.path}
          exact = {item.exact}
          key={item.path}
          />
        })}
        <Redirect to = 'posts'/>
      </Switch>
      :
      <Switch>
        {publicRoutes.map((item)=>{
          return <Route
          component = {item.component}
          path = {item.path}
          exact = {item.exact}
          key={item.path}
          />
        })}
        <Redirect to = 'login'/>
      </Switch>

      }
    </div>
  )
}
