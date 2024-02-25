// Write your code here.
import './index.css'

const Banner = props => {
  const {id, headerText, description, className} = props
  return (
    <li key={id} className={className}>
      <h1 className="banner-text">{headerText}</h1>
      <p className="banner-description">{description}</p>
    </li>
  )
}
export default Banner
