import React from 'react';
import moment from 'moment/moment';
import 'moment/locale/zh-tw';
import 'moment/locale/zh-cn';
import 'moment/locale/ja';
import 'moment/locale/ko';

import { useTranslation } from 'react-i18next';
import { AiTwotoneLock, AiFillCamera } from 'react-icons/ai';
import { IoIosFlashlight } from 'react-icons/io';

import PhoneGeneralUIWrapper from './PhoneGeneralUI/PhoneGeneralUIWrapper';
import state from '../../store';
import i18n from '../../i18n';

const LockPage = () => {
	const { t } = useTranslation();
	const focusPhoneHandler = () => {
		state.isFocusOnPhone = true;
	};

	moment.locale(i18n.language);

	return (
		<PhoneGeneralUIWrapper
			onClick={focusPhoneHandler}
			isLockScreen={true}
			textColor="white"
		>
			{/* Central part */}
			<div className="flex flex-col items-center mt-8">
				{/* unlock message */}
				<p className="flex flex-row gap-1 items-center">
					<AiTwotoneLock color="white" />{' '}
					<span className="text-white">{t('lockPage.點擊畫面來解鎖')}</span>
				</p>
				{/* time */}
				<p className="mt-2 text-[64px] text-white font-light">
					{moment().format('H:mm')}
				</p>
				{/* date */}
				<p className="-mt-1 text-[20px] text-white">
					{moment().format('MMM Do dddd')}
				</p>
			</div>

			{/* footer icon */}
			<div className="flex flex-row items-center justify-between mt-auto px-6 py-8">
				<p className="p-3 bg-black/25 rounded-full">
					<IoIosFlashlight color="white" size={24} />
				</p>
				<p className="p-3 bg-black/25 rounded-full">
					<AiFillCamera color="white" size={24} />
				</p>
			</div>
			{/* white line in the bottom */}
			<div className="flex justify-center">
				<p className="h-1 w-[100px] bg-white rounded-full"></p>
			</div>
		</PhoneGeneralUIWrapper>
	);
};

export default LockPage;
