import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ChristmasTree(props) {
	const { nodes, materials } = useGLTF('/model/christmas_tree.glb');
	return (
		<group {...props} dispose={null} scale={3}>
			<mesh
				geometry={nodes.bulb_decorations_0.geometry}
				material={materials.decorations}
			/>
			<mesh
				geometry={nodes.bulb004_decorations_0.geometry}
				material={materials.decorations}
			/>
			<mesh
				geometry={nodes['Circle002|Circle004|Dupli|_decorations_0'].geometry}
				material={materials.decorations}
			/>
			<mesh
				geometry={nodes['Circle002|Circle003|Dupli|5_decorations_0'].geometry}
				material={materials.decorations}
			/>
			<mesh
				geometry={nodes['Circle002|Circle001|Dupli|6_decorations_0'].geometry}
				material={materials.decorations}
			/>
			<mesh
				geometry={nodes['Circle002|Circle|Dupli|7_decorations_0'].geometry}
				material={materials.decorations}
			/>
			<mesh
				geometry={nodes.stand_decorations_0.geometry}
				material={materials.decorations}
				position={[-0.001, 0.089, -0.001]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.gift_gifts_0.geometry}
				material={materials.gifts}
				position={[-0.209, 0.064, -0.095]}
				rotation={[-Math.PI / 2, 0, -0.544]}
			/>
			<mesh
				geometry={nodes.gift009_gifts_0.geometry}
				material={materials.gifts}
				position={[-0.209, 0.064, -0.312]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Circle002__0.geometry}
				material={materials['Circle.002__0']}
				position={[0, -0.399, -0.007]}
				rotation={[-Math.PI / 2, 0, -1.719]}
			/>
			<mesh
				geometry={nodes['Plane002_ig��y_0'].geometry}
				material={materials.material}
				position={[-0.003, -0.477, 0.002]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0.253, 0.253, 0.272]}
			/>
			<mesh
				geometry={nodes['Plane002_pie��002_0'].geometry}
				material={materials['pie.002']}
				position={[-0.003, -0.477, 0.002]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0.253, 0.253, 0.272]}
			/>
		</group>
	);
}

useGLTF.preload('/model/christmas_tree.glb');
