import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";

import avatarScene from "../assets/3d/avatar.glb";
import avatarAnimation from "../assets/3d/Greeting.fbx";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-rocket-c4edeb0e410f46e8a4db320879f0a1db
export function Avatar({ ...props }) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene } = useGLTF(avatarScene);
  const { animations: petting } = useFBX(avatarAnimation)
  petting[0].name = 'Petting'
  // Get animation actions associated with the rocket
  const { actions } = useAnimations(petting, ref);


  // Use an effect to control the rocket's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions['Petting'].reset().play()
  }, []);

  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
