import { useState } from "react"

export default function SearchBox() {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div className="searchbox-container">
      <div className={active == true ? 'search-box--active' : 'search-box'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 searchbox-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input
          type="search"
          name="nav-search"
          id="nav-search"
          onClick={toggle}
          className='nav-search'
        />
      </div>
    </div>
  )
}