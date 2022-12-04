import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className='Header'>
                <div className='navbar-container'>

                    <input id='menu' type='checkbox' className='menu' />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <section className='HeaderLinks'>
                        <NavLink to='/' className='HeaderLink'>Home</NavLink>
                        <NavLink to='/about' className='HeaderLink'>About</NavLink>
                        <NavLink to='/skills' className='HeaderLink'>Skills</NavLink>
                        <NavLink to='/works' className='HeaderLink'>Works</NavLink>
                        <NavLink to='/contact' className='HeaderLink'>Contact</NavLink>
                    </section>
                </div>
                <h3>Boubee</h3>
            </header >
        )
    }
}