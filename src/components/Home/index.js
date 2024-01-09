import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['P', 'i', 'e', 'r', 'r', 'e', 'K.']
  const jobArray = [
    'c',
    'o',
    'm',
    'p',
    't',
    'a',
    'b',
    'l',
    'e',
    ' ',
    'e',
    't',
    ' ',
    'a',
    'u',
    'd',
    'i',
    't',
    'e',
    'u',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Bonjour</span>
            <span className={`${letterClass} _12`}>!</span>
            <br />
            <span className={`${letterClass} _13`}>Je</span>
            <span className={`${letterClass} _14`}>suis</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Comptable / Auditeur / Chef de projets</h2>
          <Link to="/contact" className="flat-button">
            ME CONTACTER
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
