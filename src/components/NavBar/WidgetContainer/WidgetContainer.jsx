import CartWidget from "./CartWidget/CartWidget"
import MenuWidget from "./MenuWidget/MenuWidget"

let responsive = window.innerWidth

export default function WidgetContainer() {
  return (
    responsive <= 992 ?
      <div className="widget-container w-full">
        <CartWidget />
        <MenuWidget />
      </div>
      :
      <div className="widget-container w-full">
        <CartWidget />
      </div>

  )
}