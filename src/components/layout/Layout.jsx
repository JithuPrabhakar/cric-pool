import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='pt-20 pb-14 min-h-screen'>
      <Header />
      <main className='rounded-t-xl bg-white'>{children}</main>
      <Navbar />
    </div>
  )
}

export default Layout
