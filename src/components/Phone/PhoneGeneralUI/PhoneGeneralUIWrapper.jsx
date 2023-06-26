import React from 'react';
import moment from 'moment/moment';
import { twMerge } from 'tailwind-merge';

import { BsBatteryFull } from 'react-icons/bs';
import { BiSignal4 } from 'react-icons/bi';

const PhoneGeneralUIWrapper = ({
	children,
	onClick,
	isLockScreen,
	textColor,
	bgDisabled,
	className,
	navbarClassName,
}) => {
	return (
		<div
			className={twMerge(
				'w-full h-full py-4 px-6 bg-cover bg-center',
				bgDisabled ? '' : "bg-[url('/bg-phone.webp')]",
				className
			)}
			onPointerDown={e => e.stopPropagation()}
			onClick={onClick}
		>
			<div className="flex flex-col h-full">
				{/* top list bar */}
				<div
					className={twMerge(
						'flex flex-row justify-between items-center',
						navbarClassName
					)}
				>
					{/* telecommunications or now time*/}
					<p className={`text-${textColor} text-sm`}>
						{isLockScreen ? '' : moment().format('H:mm')}
					</p>
					{/* WIFI、4G and Battery */}
					<div className="flex flex-row gap-1 items-center">
						<BiSignal4 size={22} color={textColor} />
						<p className={`text-${textColor} text-[10px] pt-1.5 pr-1`}>4G</p>
						<BsBatteryFull size={24} color={textColor} className="pt-1" />
					</div>
				</div>

				{children}
			</div>
		</div>
	);
};

export default PhoneGeneralUIWrapper;
