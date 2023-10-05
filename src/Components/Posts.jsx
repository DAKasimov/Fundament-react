import { useState } from "react"
import { Post } from "./Post"
import { MySelect } from "./UI/select/MySelect"
import { MyInput } from "./UI/input/MyInput"
import { MyButton } from "./UI/button/MyButton"
import { TransitionGroup } from "react-transition-group"
import { CSSTransition } from "react-transition-group"
export const Posts = (props) => {
  const {
    addPost = Function.prototype,
    posts = [],
    deletePost = Function.prototype,
    setPosts = Function.prototype,
  } = props

  const [selectedSort, setSelectedSort] = useState("")
  const [searching, setSearching] = useState([...posts])
  const [searchValue, setSearchValue] = useState("")

  const sortPost = (sort) => {
    setSelectedSort(sort)

    setPosts(
      [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort])
      })
    )
  }

  const inputSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const search = (str) => {
    setPosts(
      searching.filter((item) => {
        let temp = item.title + " " + item.description
        return temp.toLowerCase().includes(str.toLowerCase())
      })
    )
    setSearchValue("")
  }

  return (
    <div>
      <div>
        <hr style={{ margin: "15px 0" }} />
        <MyInput
          onChange={inputSearch}
          value={searchValue}
          placeholder="Поиск..."
        />
        <MyButton
          onClick={() => search(searchValue)}
          style={{
            position: "absolute",
            top: "38px",
            left: "1065px",
            border: "none",
          }}
        >
          Найти
        </MyButton>

        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "description", name: "По описанию" },
          ]}
        />
        <MyButton onClick={addPost} style={{ marginLeft: "20px" }}>
          Добавить посты
        </MyButton>
      </div>
      <TransitionGroup>
        {posts.length !== 0 ? (
          posts.map((item) => {
            return (
              <CSSTransition timeout={500} key={item.id} classNames="post">
                <Post deletePost={deletePost} {...item} />
              </CSSTransition>
            )
          })
        ) : (
          <h1>Постов нет</h1>
        )}
      </TransitionGroup>
    </div>
  )
}
