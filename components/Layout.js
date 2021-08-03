import Nav from './Nav'
import Meta from './Meta'
import Home from './Home'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Home />
      <div className={styles.browse}></div>
      {/* <div className={styles.container}>
      
        <main className={styles.main}>
          
          {children}
        </main>
      </div> */}
    </>
  )
}

export default Layout
