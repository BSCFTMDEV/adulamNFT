import { useEffect } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected, loadNfts } from './Adulam'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import Content2 from './components/Content2'
import Loading from './components/Loading'
import Feature from './components/Feature'



const App = () => {
  const [nfts] = useGlobalState('nfts')

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
  }, [])

  return (
    <div className="min-h-screen">
     
      <div className="header-section">
        <Header />
      </div>
      <div className="hero-section">
      </div>
     
      <div className="content-section">
     <Hero />
     <Content />             
      </div> 
      <div>
      <div className="footer-section">
      <Footer />
      </div>
      <Loading />
      <Alert />
      
    </div>
    </div>
    
  )
}

export default App
