import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigate = () => {
  return (
    // <nav className={navStyles.nav}>
    //   <ul>
    //     <li>
    //       <Link href='/'>Home</Link>
    //     </li>
    //     <li>
    //       <Link href='/about'>About</Link>
    //     </li>
    //     <Container><Nav></Nav></Container>       
    //   </ul>
    // </nav>

    // <>
    //   <Navbar bg="dark" variant="dark">
    //     <Container>
          
    //       <Nav className="me2-auto">
    //         <Nav.Link href="#home">Browse</Nav.Link>
    //         <Nav.Link href="#features">Explore</Nav.Link>
    //       </Nav>

    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>

    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">About</Nav.Link>
    //         <Nav.Link href="#features">Contact</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
      
    // </>
    <>
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg class="bi me-2" width="70" height="55" role="img" aria-label="Bootstrap"><image href="byrd.png" width="65" height="60"/></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-white">Featured</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Browse</a></li>
              <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
              </input>
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navigate
