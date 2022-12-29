import React from 'react'
import '../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>React Books App</h1>
            </div>
            <div>
              <Link to="/favorites">
        <h2>Your Favorites</h2>
        </Link>
        </div>
    </div>
  )
}

export default Navbar