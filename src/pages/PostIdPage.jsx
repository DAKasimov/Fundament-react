import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/PostService"
import { Loader } from "../Components/UI/Loader/Loader"
export const PostIdPage = () =>{
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async ()=>{
        const response = await PostService.getOne(params.id)
        setPost(response.data)
    })

    const [fetchPostByComments, isCommentsLoading, commentsError] = useFetching(async ()=>{
        const response = await PostService.getComments(params.id)
        setComments(response.data)
    })

    useEffect(()=>{
        
        fetchPostById()
        fetchPostByComments()
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading ? 
            <Loader/>
            : 
            <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isCommentsLoading ? <Loader/> :
            <div>{comments && comments.map((item)=>{
                return <div style={{marginTop : '15px'}} key={item.id}>
                    <h5>{item.email}</h5>
                    <div>{item.body}</div>
                </div>
                
            })}</div>
        }
        </div>

    )
}