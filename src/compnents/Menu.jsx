import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <div>
       <Link to={'/1'}><button>1</button></Link> 
       <Link to={'/2'}><button>2</button></Link> 
    </div>
  )
}
