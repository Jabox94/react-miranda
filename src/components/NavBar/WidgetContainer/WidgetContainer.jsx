import CartWidget from "./CartWidget/CartWidget"
import MenuWidget from "./MenuWidget/MenuWidget"

export default function WidgetContainer() {
  return (
    <div className="widget-container w-full">
      <CartWidget />
      <MenuWidget />
    </div>
  )
}