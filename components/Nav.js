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

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me2-auto">
            <Nav.Link href="#home">Browse</Nav.Link>
            <Nav.Link href="#features">Explore</Nav.Link>
          </Nav>

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Navigate
