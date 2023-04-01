import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import logo from '../../assets/logo-stackoverflow.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var User = useSelector((state) => (state.currentUserReducer))

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null))
    alert("Logout Successfully")
  }



    useEffect(() => {
      const token = User?.token
      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()) {
          handleLogout()
        }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
    

  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>
                 <img src={logo}  alt="logo" width="150"/>
            </Link>
            <Link className="nav-item nav-btn">About</Link>
            <Link className="nav-item nav-btn">Products</Link>
            <Link className="nav-item nav-btn">For Teams</Link>
            <form >
                <input type="text" placeholder='Search...' />
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            {User ===null ?
            <Link to='/Auth' className="nav-item nav-links">Log in</Link> :
            <>
                
               <Avatar backgroundColor='#009dff' px='15px' py='7px' borderRadius='50%' color={'white'}  > <Link to = {`/Users/${User?.result?._id}`} style={{textDecoration:"none"}}> {User.result.name.charAt(0).toUpperCase()} </Link> </Avatar>
               <button className='nav-item nav-links' onClick={handleLogout} >Log out</button>
            </>
        }
        </div>      
    </nav>
  )
}

export default Navbar
