import React from 'react';
import { Html, useProgress, Stars } from '@react-three/drei';

const Loader = () => {
	const { progress } = useProgress();

	return (
		<Html prepend center className="h-[100vh] w-[100vw]">
			<div className="h-full w-full bg-black flex justify-center items-center">
				<h1 className="font-amatic text-white text-5xl font-bold tracking-wider">
					{progress.toFixed(2)}%
				</h1>
			</div>
		</Html>
	);
};

export default Loader;
