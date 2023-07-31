import React from 'react'
import { Link} from 'react-router-dom'
export default function LinkComponent() {
  return (

    <div>
      <header>
        <a href='#'>Logo</a>
        <nav>
            <ul>    
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
