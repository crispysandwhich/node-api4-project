import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="App-header">
    <h1>What is life</h1>
    <a href="https://github.com/crispysandwhich/node-api4-project" target="_blank">Github code</a>
    <div>

      <Link to="/login">Login</Link>

    </div>
  </header>
  )
}

export default Header
