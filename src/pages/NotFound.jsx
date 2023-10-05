import { Link } from "react-router-dom"
export const NotFound = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
        <Link to="/posts">Перейти на страницу с постами</Link>
    </div>
  )
}
