import React, { Component } from 'react'
import Header from './Header'
import { BsLinkedin, BsGithub, RiWhatsappLine, SiInstagram, FaArrowCircleDown } from 'react-icons/all'
import TextTypeWriter from './TextTypeWriter'
import imgGabriel from '../Imagens/ImgGabriel.jpg'

export default class Home extends Component {
    state = {
        Animate1: '',
        Animate2: '',
        Animate3: '',
        Animate4: '',
    }

    animateLinks = () => {
        this.setState({ Animate1: 'animate' }, () => {
            setTimeout(() => {
                this.setState({ Animate1: '', Animate2: 'animate' }, () => {
                    setTimeout(() => {
                        this.setState({ Animate2: '', Animate3: 'animate' }, () => {
                            setTimeout(() => {
                                this.setState({ Animate3: '', Animate4: 'animate' }, () => {
                                    setTimeout(() => {
                                        this.setState({ Animate4: '' })
                                    }, 500);
                                })
                            }, 500);
                        })
                    }, 500);
                })
            }, 500);
        })
    }

    render() {
        const { Animate1, Animate2, Animate3, Animate4, frase } = this.state;
        return (
            <div className='Home'>
                <Header />
                <main className='HomeMain'>
                    {/* <img src={imgGabriel} alt="A man with social wears" className="imgGabriel" /> */}
                    <div>
                    <section className='HomeTexts'>
                        <h2>Hi there, I'm Gabriel Boubee</h2>
                        <h2 className='text'>
                            I am a
                            <strong style={{ color: 'red' }}>
                                <TextTypeWriter text='Web Developer' />
                            </strong>
                        </h2>
                    </section>
                    <section className='HomeSocialMedias'>
                        <button type='button' onClick={this.animateLinks} className='HomeButtonSocial'>
                            Social Medias <FaArrowCircleDown />
                        </button>
                        <div className='redesSociais'>
                            <a className='redeSocialLink' href="https://www.linkedin.com/in/gabriel-matos-boubee/">
                                <BsLinkedin className={`redeSocial ${Animate1}`} />
                            </a>
                            <a className='redeSocialLink' href="https://github.com/gabrielMatosBoubee">
                                <BsGithub className={`redeSocial ${Animate2}`} />
                            </a>
                            <a className='redeSocialLink' href='https://wa.me/5524988646887?text=Hello,%20Gabriel%20Matos%20Boubee.%20I%20view%20your%20profile%20on%20github'>
                                <RiWhatsappLine className={`redeSocial ${Animate3}`} />
                            </a>
                            <a className='redeSocialLink' href='https://www.instagram.com/gabriel.matosboubee/'>
                                <SiInstagram className={`redeSocial ${Animate4}`} />
                            </a>
                        </div>
                    </section>
                    </div>
                </main>
            </div>
        )
    }
}
