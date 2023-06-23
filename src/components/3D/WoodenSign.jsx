import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function WoodenSign(props) {
	const { nodes, materials } = useGLTF('/model/wooden_sign.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.defaultMaterial.geometry}
				material={materials.lambert1}
				scale={2}
			/>
		</group>
	);
}

useGLTF.preload('/model/wooden_sign.glb');
