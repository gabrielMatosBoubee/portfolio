import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../componentes/Header";
import TextTypeWriter from "../componentes/TextTypeWriter";
import '../css/HomeFunc.css'

function Home () {
  const history = useHistory();
  return (
    <>
    <Header />
    <main className="HomeMain">
      <div className="HomeTexts">
      <h1>Hi there, I'm Gabriel Boubee</h1>
          <TextTypeWriter text='Web Developer!' />
      </div>
    <section className="HomeButtons">
      <button 
      type="button"
      onClick={() => history.push('/works')}
      className="HomeButton">SEE MY PROJECTS</button>
      <button 
      type="button" 
      onClick={() => history.push('/contact')} 
      className="HomeButton">ENTER IN CONTACT</button>
    </section>
    </main>
    </>
  )
}

export default Home