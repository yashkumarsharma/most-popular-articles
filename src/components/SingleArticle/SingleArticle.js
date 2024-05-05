const SingleArticle = ({ article = {} }) => {
  const {
    title,
  } = article

  return (
    <div>{title}</div>
  )
}

export default SingleArticle
