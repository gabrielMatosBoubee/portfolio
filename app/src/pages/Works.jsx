import React from "react";
import Header from "../componentes/Header";
import data from "../Services/projects";
import '../css/Works.css'
import { useState } from "react";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import Carousel from "nuka-carousel/lib/carousel";

function Works() {
  const [position, setPosition] = useState(0)
  return (
    <>
      <Header />
      <main className="WorksMain">
        <div className="ok">
          <Carousel >
          {data.map((e) =>
            <div className="WorksCarousel" key={e.site}>
              <img className="WorksImg" src={e.image} alt= {e.text} sizes='100vw' />
              <section className="WorksSection">
                <p className="WorksText">{e.text}</p>
                <div className="WorksButtons">
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
                  Go to the repository
                </button>
              </div>
              </section>
            </div>
          )
        }
        </Carousel>
        </div>
      </main>
    </>
  )
}

export default Works