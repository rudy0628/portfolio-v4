import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import LineIcon from '../../LineIcon';

import {
	fadeAnimation,
	headTextAnimation,
	headContentAnimation,
	slideAnimation,
} from '../../../config/motion';
import BackBtn from '../PhoneGeneralUI/BackBtn';
import PhoneGeneralUIWrapper from '../PhoneGeneralUI/PhoneGeneralUIWrapper';

const AboutPage = () => {
	const { t } = useTranslation();

	return (
		<motion.div {...fadeAnimation}>
			<PhoneGeneralUIWrapper
				isLockScreen={false}
				textColor="black"
				bgDisabled={true}
			>
				<BackBtn />
				{/* main */}
				<div className="flex flex-col gap-4 items-center mt-[5rem]">
					{/* avatar */}
					<div className="h-[10rem] w-[10rem] rounded-full overflow-hidden">
						<img
							src="/rudy.webp"
							alt="rudy"
							className="w-full h-full object-cover"
						/>
					</div>
					{/* Info */}
					<motion.h1 {...headTextAnimation} className="mt-2 text-4xl font-bold">
						{t('aboutPage.嗨！我是')}
						<span className="highlight1">{t('aboutPage.葉世平')}</span>
					</motion.h1>
					<div className="mt-2 text-xl flex flex-col gap-2">
						<motion.p {...headContentAnimation}>
							{t('aboutPage.來自於台北，台灣')}
						</motion.p>
						<motion.p {...headContentAnimation}>
							{t('aboutPage.畢業於')}
							<span className="highlight2">
								{t('aboutPage.國立高雄科技大學')}
							</span>
						</motion.p>
						<motion.p {...headContentAnimation}>
							{t('aboutPage.主修')}
							<span className="highlight2">{t('aboutPage.資訊管理')}</span>
						</motion.p>
						<motion.p {...headContentAnimation}>
							{t('aboutPage.兩年的')}
							<span className="highlight2">{t('aboutPage.網頁開發')}</span>
							{t('aboutPage.經驗')}
						</motion.p>
					</div>

					{/* contact info */}
					<motion.div
						{...slideAnimation('down')}
						className="mt-8 flex flex-col items-center"
					>
						<h2 className="highlight1 text-3xl font-bold">
							{t('aboutPage.聯絡方式')}
						</h2>
						<div className="flex gap-4 items-center justify-center mt-6">
							<a
								href="https://www.instagram.com/ya.0628/"
								target="_blank"
								rel="noreferrer"
							>
								<AiOutlineInstagram size={24} />
							</a>
							<a
								href="https://www.facebook.com/s3352250/"
								target="_blank"
								rel="noreferrer"
							>
								<FiFacebook size={24} />
							</a>
							<a
								href="https://github.com/rudy0628"
								target="_blank"
								rel="noreferrer"
							>
								<FiGithub size={24} />
							</a>
							<a
								href="mailto:s3352250zz@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<HiOutlineMail size={24} />
							</a>
							<a
								href="https://line.me/ti/p/ZO_picyri2"
								target="_blank"
								rel="noreferrer"
							>
								<LineIcon size={24} />
							</a>
						</div>
					</motion.div>
				</div>
			</PhoneGeneralUIWrapper>
		</motion.div>
	);
};

export default AboutPage;
