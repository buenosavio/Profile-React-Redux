import React from 'react'
import { Link } from 'react-router-dom'

function Item({path, desc}) {

  return (
    <>
      <li> <Link to={path}>{desc}</Link> </li> 
    </>
  )
}

export default Item