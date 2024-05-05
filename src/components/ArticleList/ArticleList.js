const ArticleList = (props) => {
  const { articles, onClick } = props

  return (
    <ul>
      {articles.map(article => (
        <li
          onClick={() => onClick(article.id)}
        >
          {article.title}
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
