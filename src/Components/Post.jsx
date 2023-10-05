import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { MyButton } from "./UI/button/MyButton"
export const Post = (props) =>{
    const {title, description, id, deletePost = Function.prototype} = props
    const router = useHistory()
    return (
        <div className="post">
        <div className="post__content">
          <strong>
         {id}. {title}
          </strong>
          <div>
        {title} - {description}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={()=>router.push(`posts/${id}`)}>Открыть</MyButton>
        </div>
        <div className="post__btns">
          <MyButton onClick={()=>deletePost(id)}>Удалить</MyButton>
        </div>
      </div>
    )
}