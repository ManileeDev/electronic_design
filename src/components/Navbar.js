import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { useLocation } from 'react-router-dom'


const Navbar = ({searchVal}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/signin";
  const [search, setSearch] = useState("");


  const handleSearch = () => {
    searchVal(search)
  }

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
    searchVal(e.target.value)
  }
  return (
    !isLoginPage && (<nav className='nav-container'>
      <Link to="/"><h6 className='logo'>Electronics</h6></Link>
      <div className='nav-options'>
        <Link to="/laptops">Laptops</Link>
        <Link to="/monitors">Monitors</Link>
        <Link to="/pcgaming">PC Gaming</Link>
        <Link to="/mixed_reality">VR & Mixed Reality</Link>
        <Link to="/desktops">Desktops</Link>
        <Link to="/software">Software</Link>
      </div>
      <div className='search-container'>
        <input type="text" placeholder='Search' onChange={onChangeSearch} />
        <span style={{ cursor: "pointer" }} onClick={handleSearch}><CiSearch /></span>
      </div>
      <div className='d-flex gap-1'>
        <Link to="/signin"><button className='btn btn-outline-danger btn-sm'>Sign in</button></Link>
        <div className='btn btn-outline-danger btn-sm'><FaShoppingCart /></div></div>
    </nav>)
  )
}

export default Navbar