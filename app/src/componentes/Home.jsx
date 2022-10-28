import React, { Component } from 'react'
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Header />
                <h2>Hi there, I'm Gabriel Boubee</h2>
                <h3>I am a Web Developer</h3>
            </div>
        )
    }
}
