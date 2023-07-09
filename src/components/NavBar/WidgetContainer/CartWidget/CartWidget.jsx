import { useState } from "react"
export default function CartWidget() {

  const [clicked, setClicked] = useState(false)

  const toggle = () => {
    return setClicked(!clicked)
  }

  return (
    <div className="cart-widget w-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cart-icon"
        onClick={toggle}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>

      <div className={clicked == true ? 'cart-list-container--active' : 'cart-list-container'}>
        <h3 className="cart-title">
          Shopping cart

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cart-close-icon"
            onClick={toggle}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </h3>
        <table className="cart-list" id="cart-list">
          <thead>
            <tr className="cart-header">
              <th><span className="hidden">Image</span></th>
              <th>Prod. Name</th>
              <th>Price</th>
              <th><span className="hidden">Delete</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className="cart-list-item">
              <td className="cart-list-img">
                <img src="#" alt="Product thumbnail" />
              </td>
              <td className="cart-list-name">
                Pelota de basquetball
              </td>
              <td className="cart-list-price">
                $<span className="price-holder">400</span>
              </td>
              <td className="cart-list-delete">
                <button className="button">Eliminar
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )

}