import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls} from '@react-three/drei'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Model(props){
  const { scene } = useGLTF("/guitar.glb")
  return <primitive object={scene} {...props} />
}

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am an ambitious full stack developer fueled by a passion for innovation. I am looking to contribute my 
            expertise to a forward-thinking company that is venturing into the realm of technology. With a strong commitment 
            to excellence, I am eager to collaborate with like-minded professionals to create meaningful and lasting impact.
          </p>
          <p align="LEFT">
            I'm quiet disciplined, instinctively curious, and perpetually refining my
            problem solving skills one bug at a time.
          </p>
          <p>
            If I had to define myself in one sentence it would be hard working 
            family man with an electric guitar and Heavy Metal obsession,
            that loves hiking and lifting, and is passionate about how technology can improve our lives!!
          </p>
        </div>

        <div className="guitar-3d">
          <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{position:"absolute", width:"500px", height:"900px"}}>
            <color attach="background" args={["#022c43"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
              <Stage environment={"sunset"}>
                 <Model scale={0.01} />
              </Stage>
            </PresentationControls>
          </Canvas>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About