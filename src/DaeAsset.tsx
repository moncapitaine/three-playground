import { useLoader } from '@react-three/fiber'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'

export const DaeAsset = (props: any) => {
  const asset = useLoader(ColladaLoader, props.path as string, (loader) => {
    console.log(loader)
  })

  asset.scene.traverse((c: any) => (c.castShadow = c.receiveShadow = true))

  return <primitive object={asset.scene} {...props} />
}
