import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F7F7F7" }}>{children}</main>
      <Footer />
    </>
  )
}