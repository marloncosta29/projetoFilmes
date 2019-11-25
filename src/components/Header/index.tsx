import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Filmaria</Link>
      </div>
    )
  }
}