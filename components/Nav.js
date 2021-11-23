import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigate = () => {
  return (
    
    <>
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/home" class="nav-link px-2 text-white">Featured</a></li>
              <li><a href="/about" class="nav-link px-2 text-white">Browse</a></li>
              <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="/about" class="nav-link px-2 text-white">About</a></li>
            </ul>

            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg class="bi me-2" width="400" height="45" role="img" aria-label="Bootstrap"><image href="logo_white.png" width="200" height="65"/></svg>
            </a>

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
