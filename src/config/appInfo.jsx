import { FiPower } from 'react-icons/fi';
import { BsTools } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { IoLanguage } from 'react-icons/io5';

export const appUIInfo = [
	{
		id: 'quit',
		appIcon: <FiPower color="red" size={42} />,
		bgColor: 'white',
		appName: '離開',
	},
	{
		id: 'about',
		appBg: <img src="/rudy.jpg" alt="rudy" className="z-5" />,
		appName: '關於我',
	},
	{
		id: 'skills',
		appIcon: <BsTools color="black" size={42} />,
		bgColor: 'white',
		appName: '技能',
	},
	{
		id: 'projects',
		appIcon: <GrProjects color="black" size={42} />,
		bgColor: 'white',
		appName: '專案',
	},
	{
		id: 'language',
		appIcon: <IoLanguage color="black" size={42} />,
		bgColor: 'white',
		appName: '語言',
	},
];

export const defaultAppUIInfo = [
	{
		id: 'app_store',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/app-store.png"
					alt="app_store"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: 'App Store',
	},
	{
		id: 'mail',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/mail.png"
					alt="mail"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '郵件',
	},
	{
		id: 'camera',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/camera.png"
					alt="camera"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '相機',
	},
	{
		id: 'clock',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/clock.png"
					alt="clock"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '時鐘',
	},
	{
		id: 'facetime',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/facetime.png"
					alt="facetime"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: 'FaceTime',
	},
	{
		id: 'itunes',
		appIcon: (
			<div className="w-[72px] h-[72px] p-2">
				<img
					src="/phoneApp/itunes.png"
					alt="itunes"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: 'iTunes',
	},
	{
		id: 'message',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/message.png"
					alt="message"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '訊息',
	},
	{
		id: 'phone',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/phone.png"
					alt="phone"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '電話',
	},
	{
		id: 'photos',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/photos.png"
					alt="photos"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '照片',
	},
	{
		id: 'safari',
		appIcon: (
			<div className="w-[72px] h-[72px] p-1">
				<img
					src="/phoneApp/safari.png"
					alt="safari"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: 'Safari',
	},
	{
		id: 'settings',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/settings.png"
					alt="settings"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '設定',
	},
	{
		id: 'weather',
		appIcon: (
			<div className="w-[72px] h-[72px]">
				<img
					src="/phoneApp/weather.png"
					alt="weather"
					className="w-full h-full object-contain"
				/>
			</div>
		),
		bgColor: 'white',
		appName: '天氣',
	},
];
