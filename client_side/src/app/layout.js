import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import './globals.css'
import Home from './Page/Home/Home'

export default function RootLayout({ children }) {
  return (
    <>

    <Header />

    <Home />

    <Footer />



    </>
  )
}
