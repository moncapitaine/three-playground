import { Environment, ContactShadows, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import {} from 'three'
import { Robot } from './Robot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#555555',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Canvas shadows>
        <OrthographicCamera makeDefault position={[-2, 2, 2]} zoom={100} near={0.1} far={20} />
        <ambientLight />
        <directionalLight position={[0, 0, 10]} castShadow />
        <Environment preset="city" />
        <axesHelper />
        <Robot path="/models/simplified_cell.dae" position={[0, 0, -1]} rotation={[0, 0, 0]} />
        <Robot path="/models/sand_mold.dae" position={[1, 0.2, 1]} rotation={[Math.PI / 2, 0, 0]} />
        <Robot path="/models/go_scan_with_mount_and_balls.dae" position={[0, 0, 0]} rotation={[0, 0, 0]} />

        <ContactShadows scale={10} blur={3} />
        <OrbitControls makeDefault enableZoom />
      </Canvas>
    </div>
  )
}

export default App
