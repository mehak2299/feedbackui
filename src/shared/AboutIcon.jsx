import React from 'react'
import {Link } from "react-router";

import { FaQuestion } from 'react-icons/fa'
export default function AboutIcon() {
  return (
    <div className='about-link'>
      <Link to="/about"><FaQuestion size={30}/>
      </Link>
    </div>
  )
}
