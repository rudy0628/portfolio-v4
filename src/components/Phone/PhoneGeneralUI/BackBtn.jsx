import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

import state from '../../../store';

const BackBtn = ({ onClick }) => {
	return (
		<button
			onClick={onClick ? onClick : () => (state.currentApp = '')}
			className="absolute top-16 left-6 cursor-default z-1000"
		>
			<BiArrowBack size={24} />
		</button>
	);
};

export default BackBtn;
