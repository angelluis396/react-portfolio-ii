import { useRef } from 'react'
import LogoA from '../../../assets/images/logo-a-full-height-full-width.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoA}
        alt="Java,  Developer"
      />
    </div>
  )
}

export default Logo