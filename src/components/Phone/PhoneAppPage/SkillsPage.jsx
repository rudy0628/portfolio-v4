import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { fadeAnimation, slideAnimation } from '../../../config/motion';
import BackBtn from '../PhoneGeneralUI/BackBtn';
import PhoneGeneralUIWrapper from '../PhoneGeneralUI/PhoneGeneralUIWrapper';

const SkillsPage = () => {
	const { t } = useTranslation();

	return (
		<motion.div {...fadeAnimation} className="overflow-hidden">
			<PhoneGeneralUIWrapper
				isLockScreen={false}
				textColor="black"
				bgDisabled={true}
				className="p-0"
				navbarClassName="px-6 pt-4 pb-2"
			>
				<BackBtn />
				{/* background */}
				<svg className="float-left top-[10vh] h-[100vh] w-full overflow-hidden z-1">
					<circle cx="50%" cy="50%" r="100%" fill="#b1dafb" />
					<circle
						cx="50%"
						cy="100%"
						r={window.innerHeight / 1.4}
						fill="#f2e5d7"
					/>
				</svg>
				{/* skills */}
				<div className="absolute top-[13vh] left-[50%] translate-x-[-50%] w-full flex flex-col items-center">
					<motion.h1
						className="highlight2 text-3xl font-bold text-center"
						{...slideAnimation('left')}
					>
						{t('skillsPage.專長與技能')}
					</motion.h1>
					<motion.p
						className="text-lg font-bold text-center mt-4 px-2"
						{...slideAnimation('right')}
					>
						{t('skillsPage.以下是我目前擁有的專長與技術：')}
					</motion.p>
					<motion.div
						className="w-full flex flex-row justify-between px-4 mt-[12rem]"
						{...slideAnimation('up')}
					>
						<div className="flex flex-col items-center gap-2">
							<h2 className="text-xl font-bold mb-4">
								{t('skillsPage.前端技能')}
							</h2>
							<p className="font-bold text-lg text-slate-800">HTML</p>
							<p className="font-bold text-lg text-slate-800">CSS</p>
							<p className="font-bold text-lg text-slate-800">JavaScript</p>
							<p className="font-bold text-lg text-slate-800">TypeScript</p>
							<p className="font-bold text-lg text-slate-800">ReactJs</p>
							<p className="font-bold text-lg text-slate-800">Next.js</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<h2 className="text-xl font-bold mb-4">
								{t('skillsPage.後端技能')}
							</h2>
							<p className="font-bold text-lg text-slate-800">NodeJs</p>
							<p className="font-bold text-lg text-slate-800">Express</p>
							<p className="font-bold text-lg text-slate-800">GraphQL</p>
							<p className="font-bold text-lg text-slate-800">MongoDB</p>
							<p className="font-bold text-lg text-slate-800">RESTful API</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<h2 className="text-xl font-bold mb-4">
								{t('skillsPage.實用工具')}
							</h2>
							<p className="font-bold text-lg text-slate-800">Git</p>
							<p className="font-bold text-lg text-slate-800">GitHub</p>
							<p className="font-bold text-lg text-slate-800">NPM</p>
							<p className="font-bold text-lg text-slate-800">Vercel</p>
							<p className="font-bold text-lg text-slate-800">Heroku</p>
							<p className="font-bold text-lg text-slate-800">Netlify</p>
						</div>
					</motion.div>
				</div>
			</PhoneGeneralUIWrapper>
		</motion.div>
	);
};

export default SkillsPage;
