import React from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { fadeAnimation } from '../../../config/motion';
import PhoneGeneralUIWrapper from '../PhoneGeneralUI/PhoneGeneralUIWrapper';
import BackBtn from '../PhoneGeneralUI/BackBtn';

const CopyrightPage = () => {
	const { t } = useTranslation();

	return (
		<motion.div {...fadeAnimation}>
			<PhoneGeneralUIWrapper
				isLockScreen={false}
				textColor="black"
				bgDisabled={true}
			>
				<BackBtn />
				<div className="mt-16 w-full">
					<h1 className="font-bold text-4xl text-center">
						{t('mainPage.版權宣告')}
					</h1>
					<p className="mt-6 text-center">
						Copyright &copy; {moment().format('YYYY')} Rudy Yeh All rights
						reserved
					</p>
					<p className="mt-4 text-center">
						Christmas tree 3D model provided by{' '}
						<a
							href="https://sketchfab.com/jeandiz"
							target="_blank"
							className="text-[#90caf9]"
						>
							Mateusz Woliński
						</a>{' '}
						from{' '}
						<a
							href="https://sketchfab.com/"
							target="_blank"
							className="text-[#90caf9]"
						>
							Sketchfab
						</a>
					</p>
					<p className="mt-4 text-center">
						Wooden sign 3D model provided by{' '}
						<a
							href="https://sketchfab.com/carlossamuelariza"
							target="_blank"
							className="text-[#90caf9]"
						>
							Carlos
						</a>{' '}
						from{' '}
						<a
							href="https://sketchfab.com/"
							target="_blank"
							className="text-[#90caf9]"
						>
							Sketchfab
						</a>
					</p>
				</div>
			</PhoneGeneralUIWrapper>
		</motion.div>
	);
};

export default CopyrightPage;
