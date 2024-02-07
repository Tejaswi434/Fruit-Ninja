import './index.css'

const ImageList = props => {
  const {each, tabitem, clickingImage} = props
  const {id, imageUrl, thumbnailUrl} = each
  const sendingid = () => {
    console.log('hi')
    clickingImage(imageUrl)
  }
  return (
    <div className="buttonsList">
      <button
        type="button"
        onClick={sendingid}
        alt="buttu"
        className="button_change"
      >
        <img src={each.imageUrl} className="data" />
      </button>
    </div>
  )
}

export default ImageList
