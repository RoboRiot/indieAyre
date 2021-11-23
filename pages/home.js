import homeStyles from '../styles/Home.module.css'
import '../styles/Home.module.css'
// import Carousel from 'react-bootstrap/Carousel'

const home = () => {
  return (
    // <div className={homeStyles.carousel}>
    //   <Carousel >
        
    //     <Carousel.Item >
    //       <img
    //         className="d-block w-100"
    //         // src="holder.js/800x400?text=First slide&bg=373940"
    //         src="stardew.jpeg"
    //         alt="First slide"
    //       />
    //       <Carousel.Caption>
    //         {/* <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="celeste.jpeg"
    //         alt="Second slide"
    //       />

    //       <Carousel.Caption>
    //         {/* <h3>Second slide label</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="hades.0_launch_trailer"
    //         alt="Third slide"
    //       />

    //       <Carousel.Caption>
    //         {/* <h3>Third slide label</h3>
    //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
      
    // </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="stardew.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="celeste.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="hades.0_launch_trailer" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default home
