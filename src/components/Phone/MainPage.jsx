import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import PhoneGeneralUIWrapper from './PhoneGeneralUI/PhoneGeneralUIWrapper';
import PhoneAppBtn from './PhoneGeneralUI/PhoneAppBtn';
import state from '../../store';
import { appUIInfo, defaultAppUIInfo } from '../../config/appInfo';

import AboutPage from './PhoneAppPage/AboutPage';
import SkillsPage from './PhoneAppPage/SkillsPage';
import ProjectPage from './PhoneAppPage/Project/ProjectPage';
import LanguagePage from './PhoneAppPage/LanguagePage';

const MainPage = () => {
	const snap = useSnapshot(state);
	const unFocusPhoneHandler = () => {
		state.isFocusOnPhone = false;
	};

	const currentAppHandler = appName => {
		state.currentApp = appName;
	};

	return snap.currentApp === '' ? (
		<PhoneGeneralUIWrapper isLockScreen={false} textColor="white">
			<div className="grid grid-cols-4 gap-4 mt-6">
				{/* functional app ui */}
				{appUIInfo.map(app => (
					<PhoneAppBtn
						{...app}
						key={app.id}
						onClick={
							app.id === 'quit'
								? unFocusPhoneHandler
								: () => currentAppHandler(app.id)
						}
					/>
				))}
				{/* default app ui */}
				{defaultAppUIInfo.map(app => (
					<PhoneAppBtn {...app} key={app.id} btnClassName="p-0" />
				))}
			</div>
		</PhoneGeneralUIWrapper>
	) : (
		<AnimatePresence>
			{snap.currentApp === 'about' && <AboutPage />}
			{snap.currentApp === 'skills' && <SkillsPage />}
			{snap.currentApp === 'projects' && <ProjectPage />}
			{snap.currentApp === 'language' && <LanguagePage />}
		</AnimatePresence>
	);
};

export default MainPage;
