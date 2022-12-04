import React from "react";
import Header from "../componentes/Header";
import data from "../Services/projects";
import '../css/Works.css'
import { useState } from "react";

function Works() {
  const [position, setPosition] = useState(0)
  return (
    <>
      <Header />
      <main className="WorksMain">
        <button
          type="button"
          id="WorksRegress"
          className="WorksCarousels"
          onClick={() => position === 0 ? setPosition(4) : setPosition(position - 1)}>
          {'<'}
        </button>
        <div className="ok">
          {[data[position]].map((e) =>
            <div className="WorksCarousel" key={e.site}>
              <img className="WorksImg" src={e.image} alt= {e.text} sizes='100vw' />
              <section className="WorksSection">
                <p className="WorksText">{e.text}</p>
                <button
                  type="button"
                  className="WorksButton"
                  onClick={() => window.open(e.site)}>
                  Go to the site
                </button>
                <button
                  type="button"
                  className="WorksButton"
                  onClick={() => window.open(e.repositor)}>
                  Go to the repositor
                </button>
              </section>
            </div>
          )
          }
          <div className="WorksDiv">
            {data.map((e, index) => <button
              key={index}
              type='button'
              className="btnCarousel"
              style={position === index ? { 'background': 'black' } : { 'backgroundColor': 'white' }}
              onClick={() => setPosition(index)}
            ></button>)}
          </div>
        </div>
        <button
          type="button"
          className="WorksCarousels"
          id="WorksAdvance"
          onClick={() => position === 4 ? setPosition(0) : setPosition(position + 1)}>
          {'>'}
        </button>
      </main>
    </>
  )
}

export default Works