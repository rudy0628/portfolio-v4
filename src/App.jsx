import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import {
	Center,
	MeshReflectorMaterial,
	Stars,
	SpotLight,
	Text,
	Text3D,
	CameraControls,
} from '@react-three/drei';

import Iphone from './components/3D/Iphone';
import ChristmasTree from './components/3D/ChristmasTree';
import WoodenSign from './components/3D/WoodenSign';
import Loader from './components/Loader';
import state from './store';

const App = () => {
	const cameraControlRef = useRef(null);
	const [cameraEnabled, setCameraEnabled] = useState(true);
	const snap = useSnapshot(state);

	// initial into the phone, show animation
	useEffect(() => {
		const initialTransitionTimeout = setTimeout(
			() => cameraControlRef.current?.setPosition(-10, 5, 10, true),
			1000
		);

		return () => clearTimeout(initialTransitionTimeout);
	}, []);

	// whether the phone is using or not
	useEffect(() => {
		let cameraTransitionTimeOut;
		if (snap.isFocusOnPhone) {
			cameraControlRef.current?.setPosition(0, 0, Math.PI / 2 + 3.7, true);
			// disable the camera after the camera transition animation is done.
			cameraTransitionTimeOut = setTimeout(() => setCameraEnabled(false), 1000);
		} else {
			// enable first so we don't need to consider the transition duration.
			setCameraEnabled(true);
			cameraControlRef.current?.setPosition(-10, 5, 10, true);
		}

		return () => clearTimeout(cameraTransitionTimeOut);
	}, [snap.isFocusOnPhone]);

	return (
		<div className="w-[100vw] h-[100vh]">
			<Canvas
				camera={{ position: [-15, 10, -10], fov: 60 }}
				className="w-[100vw] max-w-full h-[100vw]"
			>
				<Suspense fallback={<Loader />}>
					{/* Background Color */}
					<color attach="background" args={['#050505']} />
					{/* stars */}
					<Stars
						radius={100}
						depth={15}
						count={4000}
						factor={8}
						saturation={0}
						fade
						speed={1}
					/>
					{/* light */}
					<hemisphereLight intensity={1.5} />
					<ambientLight intensity={1.5} />
					<SpotLight
						castShadow
						penumbra={1}
						distance={0}
						angle={0.7}
						attenuation={5}
						anglePower={4}
						intensity={4}
						position={[0, 20, 0]}
					/>
					{/* 3D Component */}
					<Center>
						<Iphone />
					</Center>
					<Center position={[4.5, 0.85, -4]}>
						<ChristmasTree />
					</Center>
					<Center position={[-4.5, -0.5, 0]}>
						<WoodenSign />
					</Center>
					{/* Reflector floor and inReflector Text */}
					<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.45, 0]}>
						<planeGeometry args={[50, 50]} />
						<MeshReflectorMaterial
							blur={[300, 300]}
							resolution={2048}
							mixBlur={1}
							mixStrength={50}
							roughness={1}
							depthScale={1.2}
							minDepthThreshold={0.4}
							maxDepthThreshold={1.4}
							color="#191920"
							metalness={0.5}
						/>
						{/* Introduce */}
						<mesh>
							<Text3D
								position={[3, -2.5, 0]}
								letterSpacing={-0.06}
								size={0.6}
								font="/font.json"
							>
								Rudy Yeh
								<meshNormalMaterial />
							</Text3D>
							<Text
								fontSize={0.4}
								lineHeight={1.4}
								position={[4.3, -4.0, 0.15]}
								letterSpacing={0.1}
							>
								{
									'Web Development\nFront-End Developer\nBack-End Developer\nUI/UX Designer'
								}
							</Text>
							{/* Wooden Sign text */}
							<Text
								fontSize={0.3}
								lineHeight={1.4}
								letterSpacing={0.1}
								position={[-4.5, -0.32, 2.75]}
								rotation={[Math.PI / 2, 0, 0]}
								color="black"
							>
								{'Click the Phone\nto start.'}
							</Text>
						</mesh>
					</mesh>
					{/* Controls Camera */}
					(
					<CameraControls
						minPolarAngle={Math.PI / 2 - 20}
						maxPolarAngle={Math.PI / 2}
						minDistance={5}
						maxDistance={snap.isFocusOnPhone ? 5 : 20}
						ref={cameraControlRef}
						enabled={cameraEnabled}
					/>
					)
				</Suspense>
			</Canvas>
		</div>
	);
};

export default App;
