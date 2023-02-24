import * as THREE from 'three'
import { useEffect, useLayoutEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { Collada, ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Robot = (props: any) => {
  const robot = useLoader(ColladaLoader, props.path as string, (loader) => {
    console.log(loader)
  })

  robot.scene.traverse((c: any) => (c.castShadow = c.receiveShadow = true))

  return <primitive object={robot.scene} {...props} />
}
