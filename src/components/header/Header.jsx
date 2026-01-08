import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/1553963/pexels-photo-1553963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
    </div>
  )
}
