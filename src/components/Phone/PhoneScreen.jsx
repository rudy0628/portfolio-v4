import React from 'react';
import { Html } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import state from '../../store';
import LockPage from './LockPage';
import MainPage from './MainPage';

const PhoneScreen = () => {
	const snap = useSnapshot(state);

	return (
		<Html
			className="w-[360px] h-[762px] rounded-[47px] bg-white overflow-hidden"
			position={[0.009, 0.49, 0.023]}
			transform
			scale={0.05}
			occlude
		>
			{!snap.isFocusOnPhone && <LockPage />}
			{snap.isFocusOnPhone && <MainPage />}
		</Html>
	);
};

export default PhoneScreen;
