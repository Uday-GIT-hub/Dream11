import React,{useState} from 'react'
import {MenuList} from './MenuList'
import './Navbar.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const [clicked,setClicked] = useState(false)
    const menulist = MenuList.map(({title,url},index) => {return (
        <li key={index}>
            <NavLink to={url} className= {({isActive}) => (isActive ? "active" :"Notactive")} >{title}</NavLink>
        </li>
    )})

    const clickHandler = () => {
        setClicked(!clicked)
    }
    return(
        <nav>
            <div className="logo">
                Dream 11
            </div>
            <div className="menu-icon" onClick={clickHandler}>
                <i className={clicked ? "fas fa-times" :"fas fa-bars"} style={{fontSize:"22px"}}></i>
            </div>
            <ul className={clicked ? "menu-list":"menu-list close"}>{menulist}</ul>
        </nav>
        
    ) 
}

export default Navbar
