export const Pagination = (props) => {
    const {pagesArray = [], changePage = Function.prototype, page = 1} = props
  return (
    <div className="page__wrapper">
      {pagesArray.map((item) => {
        return (
          <span
            onClick={() => changePage(item)}
            className={page === item ? "page__current" : "page"}
            key={item}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}
