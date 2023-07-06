import Logo from "./Logo/Logo"
import SearchBox from "./SearchBox/SearchBox"
import WidgetContainer from "./WidgetContainer/WidgetContainer"
// import NavMenu from "./NavMenu/NavMenu"

export default function NavBar() {
  return (
    <nav className="navbar w-full">
      <div className="navbar-container">
        <Logo />
        <SearchBox />
        <WidgetContainer />
      </div>
    </nav>
  )
}