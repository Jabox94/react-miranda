import Logo from "./Logo/Logo"
import SearchBox from "./SearchBox/SearchBox"
import WidgetContainer from "./WidgetContainer/WidgetContainer"
import NavMenu from "./NavMenu/NavMenu"

// Variables
let responsive = window.innerWidth


export default function NavBar() {
  return (
    responsive <= 992 ?
      <nav className="navbar w-full">
        <div className="navbar-container-mobile w-full">
          <Logo />
          <SearchBox />
          <WidgetContainer />
        </div>
      </nav>
      :
      <nav className="navbar w-full">
        <div className="navbar-container-desktop w-full">
          <Logo />
          <SearchBox />
          <NavMenu />
          <WidgetContainer />
        </div>
      </nav>

  )
}