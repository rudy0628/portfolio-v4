import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

const PhoneAppBtn = ({
	appIcon,
	appBg,
	bgColor,
	onClick,
	appName,
	btnClassName,
}) => {
	const { t } = useTranslation();

	return (
		<motion.div whileTap={{ scale: 1.2, transition: { duration: 1 } }}>
			<div
				className={twMerge(
					`h-[65px] w-[65px] rounded-[18px] flex justify-center items-center bg-${bgColor} active:bg-slate-100 overflow-hidden object-contain z-10`,
					btnClassName
				)}
				onClick={onClick}
			>
				{appIcon || appBg}
			</div>
			<p className="text-center text-white mt-1 text-sm">
				{t(`mainPage.${appName}`)}
			</p>
		</motion.div>
	);
};

export default PhoneAppBtn;
