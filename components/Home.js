import homeStyles from '../styles/Home.module.css'
import '../styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  return (
    <div className={homeStyles.carousel}>
    <Carousel >
    <Carousel.Item >
      <img
        className="d-block w-100"
        // src="holder.js/800x400?text=First slide&bg=373940"
        src="slide1.svg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="slide2.svg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="slide3.svg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Home
