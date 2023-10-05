import { About } from "../pages/About"
import { PostsPage } from '../pages/PostsPage'
import { PostIdPage } from "../pages/PostIdPage"
import { Login } from "../pages/Login"
export const privateRoutes = [
    {
        path : '/about',
        component : About,
        exact : true
    },
    {
        path : '/posts',
        component : PostsPage,
        exact : true
    },
    {
        path : '/posts/:id',
        component : PostIdPage,
        exact : true
    },
]

export const publicRoutes = [
    {
        path : '/login',
        component : Login,
        exact : true
    },
    
]