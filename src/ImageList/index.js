import './index.css'

const ImageList = props => {
  const {each, tabitem} = props

  return (
    <div>
      <img src={each.imageUrl} className="data" />
    </div>
  )
}

export default ImageList
