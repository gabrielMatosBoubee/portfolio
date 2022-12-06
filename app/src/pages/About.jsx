import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../componentes/Header";
import imgGabriel from '../Imagens/ImgGabriel.jpg'
import '../css/About.css'

function About () {
  const history = useHistory();
  return (
    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
    <Header />
    <main className="About">
      <aside className="AboutText">
    <h1 style={{ 'marginTop': '10px'}}>Whos am I?</h1>
    <p style={{ 'marginTop': '10px'}}>I am a person who wants challenges, the one who will undestand the client's disconfort
      and bring the solucion on codes! But now I'll tell you my history. I start to learn
      progamation because I love technology and learn every day, so I decide to enter on trybe.
    </p>
    <h2 style={{ 'marginTop': '10px'}}>What I learn on trybe?</h2>
    <p style={{ 'marginTop': '10px'}}>I learn how to learn quickly. In this trajectory I learn some technology for web develop
      like html 5, CSS3, Javascript, Jest, React, RTL, Redux, Git, Github and Vercel.  
    </p>
    <button 
      type="button"
      onClick={() => history.push('/works')}
      className="HomeButton">SEE MY PROJECTS</button>
      </aside>
    <img className="AboutImg" src={imgGabriel} alt="Gabriel Matos Boubee" />
      </main>
    </div>
  )
}

export default About