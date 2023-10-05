import React, { useRef } from "react"
import { useState, useEffect } from "react"
import { Posts } from "../Components/Posts"
import { CreatePost } from "../Components/CreatePost"
import { MyModal } from "../Components/UI/MyModal/MyModal"
import PostService from "../API/PostService"
import { Loader } from "../Components/UI/Loader/Loader"
import { useFetching } from "../hooks/useFetching"
import { getPagesCount } from "../utils/pages"
import { getPagesArray } from "../utils/pages"
import { Pagination } from "../Components/UI/pagination/Pagination"


export const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [visible, setVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  

  const pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPagesCount(totalCount, limit))
  })

  const lastElement = useRef()
  const observer = useRef()

  const addPost = (obj) => {
    obj.id = posts.length + 1
    setPosts([...posts, obj])
  }

  const deletePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id))
  }
  const func = () => {
    setVisible(!visible)
  }

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(()=>{
    if (isLoading){
      return
    }
    if (observer.current){
      observer.current.disconnect()
    }
    let callback = function(entries, observer){
      if (entries[0].intersecting && page < totalPages){
        setPage(page + 1)
      }
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElement.current)
  },[isLoading])

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page])

  return <div>
    {visible ? (
        <MyModal addPost={func} visible={visible}>
          <CreatePost addPost={addPost} />
        </MyModal>
      ) : (
        ""
      )}
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isLoading && (
        <Loader />
      ) } 
      {
        <div>
        <Posts
          addPost={func}
          deletePost={deletePost}
          setPosts={setPosts}
          posts={posts}
        />
        <div ref={lastElement} style={{height : '20px', background: 'red'}}>

        </div>
        </div>
      
      }
      <Pagination pagesArray = {pagesArray} changePage = {changePage} page = {page}/>
  </div>
}
