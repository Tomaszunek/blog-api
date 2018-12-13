import * as React from 'react'
import './Navigation.scss'

function Navigation() {
  return (
    <nav>
      <div>Navigation</div>
      <a href='/articles'>Art</a>
      <a href='/article-edit'>Art edit</a>
    </nav>
  )
}

export default Navigation