import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

import PhoneGeneralUIWrapper from '../PhoneGeneralUI/PhoneGeneralUIWrapper';
import { fadeAnimation } from '../../../config/motion';
import BackBtn from '../PhoneGeneralUI/BackBtn';
import i18n from '../../../i18n';
import state from '../../../store';

const options = [
	{ value: 'zh_tw', label: '繁' },
	{ value: 'zh_cn', label: '简' },
	{ value: 'en_us', label: 'Eng' },
	{ value: 'ja', label: '日本語' },
	{ value: 'ko', label: '한국어' },
];

const LanguagePage = () => {
	const { t } = useTranslation();

	const languageChangeHandler = language => {
		i18n.changeLanguage(language.value);
		state.currentApp = '';
	};

	const getLabel = value => {
		for (let option of options) {
			if (value === option.value) {
				return option.label;
			}
		}
	};

	return (
		<motion.div {...fadeAnimation}>
			<PhoneGeneralUIWrapper
				isLockScreen={false}
				textColor="black"
				bgDisabled={true}
			>
				<BackBtn />
				<div className="absolute top-[30%] left-[50%] w-[90%] translate-x-[-50%] translate-y-[-50%]">
					<h1 className="text-center font-bold text-3xl mb-4">
						{t('utils.選擇語言')}
					</h1>
					<Select
						defaultValue="zh_tw"
						onChange={languageChangeHandler}
						options={options}
						placeholder={getLabel(i18n.language)}
					/>
				</div>
			</PhoneGeneralUIWrapper>
		</motion.div>
	);
};

export default LanguagePage;
