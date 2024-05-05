const Tags = (props) => {

  const {
    content = [],
    title,
  } = props

  if(!content.length) return null

  return (
    <div className='mb-4'>
      <h4 className='font-semibold mb-2'>{title}</h4>
      <div className='text-sm text-gray-600'>
        {content.map((item, index) => (
          <div key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 m-1'>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tags
