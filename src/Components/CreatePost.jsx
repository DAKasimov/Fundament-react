import { useRef, useState } from "react"
import { MyButton } from "./UI/button/MyButton"
import { MyInput } from "./UI/input/MyInput"

export const CreatePost = (props) => {
  const { addPost = Function.prototype } = props

  const [titleValue, setTitleValue] = useState("")
  const [descriptionValue, setDescriptionValue] = useState("")
  const bodyInputRef = useRef()

  const handleTitle = (event) => {
    setTitleValue(event.target.value)
    
  }

  const handleDescription = (event) => {
    setDescriptionValue(event.target.value)
  }

  const add = () => {
    if (titleValue === "") {
      alert("Необходимо заполнить поле с названием")
    }
    else if (descriptionValue === "") {
      alert("Необходимо заполнить поле с описанием")
    } else {
      addPost({ title: titleValue, description: descriptionValue })
      setTitleValue("")
      setDescriptionValue("")
    }
  }

  return (
    <div>
      <MyInput
        type="text"
        onChange={handleTitle}
        value={titleValue}
        placeholder="Введите название..."
      />

      <MyInput
        type="text"
        onChange={handleDescription}
        value={descriptionValue}
        placeholder="Введите описание..."
      />
      <MyButton onClick={add}>Добавить пост</MyButton>
      
    </div>
  )
}
