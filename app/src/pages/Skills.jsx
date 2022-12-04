import React from "react";
import Header from "../componentes/Header";
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io5'
import {FaReact} from 'react-icons/fa'
import {SiTestinglibrary, SiJest, SiRedux, SiVercel, SiTrello} from 'react-icons/si'
import slackImg from '../Imagens/slack.png'
import '../css/Skills.css'


function Skills () {
  return (
    <>
    <Header />
    <div className="Skills">
    <main className="SkillsMain">
        <h2 style={{'textAlign': 'center'}}>Skills</h2>
     <AiFillHtml5 className="icon" style={{'color': 'rgb(229,77,38)'}}/>
     <DiCss3 className="icon" style={{'color': '#2196F3'}}/>
     <IoLogoJavascript className="icon" style={{'color': 'yellow'}}/>
     <FaReact className="icon" style={{'color': 'rgb(97,218,251)'}}/>
     <SiTestinglibrary className="icon" style={{'color': 'rgb(232,28,39)'}}/>
     <SiJest className="icon" style={{'color': 'rgb(198,61,20)'}}/>
     <SiRedux className="icon" style={{'color': 'rgb(112,70,178)'}}/>
     <SiVercel className="icon"/>
     <SiTrello className="icon" style={{'color': 'rgb(2,106,167)'}}/>
     <img src={slackImg} alt='slackIcon' className="icon"/>
     <AiFillGithub className="icon"/>
    </main>
    </div>
    </>
  )
}

export default Skills