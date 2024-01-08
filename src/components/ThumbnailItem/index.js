// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, getActiveImgId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const getClickImage = () => {
    getActiveImgId(id)
  }

  const changeActiveStyle = isActive ? 'act-img-btn' : ''

  return (
    <li className="container">
      <button
        className={`button ${changeActiveStyle}`}
        type="button"
        onClick={getClickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
