import './App.css'
// Layouts
import Hd from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import ItemsContainer from './components/ItemsContainer/ItemsContainer'
import MainBanner from './components/Banners/MainBanner'

function App() {
  let userName = 'Bienvenido/a a IWI! Que no es uwu'
  return (
    <>
      <Hd />
      <NavBar />
      <MainBanner />
      <main>
        <ItemsContainer greeting={userName} />
      </main>
    </>
  )
}

export default App
