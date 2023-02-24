import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const GltfAsset = (props: any) => {
  const asset = useLoader(GLTFLoader, props.path as string, (loader) => {
    console.log(loader)
  })

  asset.scene.traverse((c: any) => {
    c.castShadow = c.receiveShadow = true
    console.log(c)
    if (c.material) {
      c.material = new THREE.MeshPhongMaterial({ color: 'blue', side: THREE.DoubleSide, flatShading: true })
    }
  })

  return <primitive object={asset.scene} {...props} />
}
