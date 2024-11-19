import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slideToShow: 1,
    slideToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="text">
          <h3>1</h3>
        </div>
        <div className="text">
          <h3>2</h3>
        </div>
        <div className="text">
          <h3>3</h3>
        </div>
        <div className="text">
          <h3>4</h3>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
