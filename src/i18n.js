import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_us from './assets/locales/en_us.json';
import zh_tw from './assets/locales/zh_tw.json';
import zh_cn from './assets/locales/zh_cn.json';
import ja from './assets/locales/ja.json';
import ko from './assets/locales/ko.json';

const resources = {
	en_us: {
		translation: en_us,
	},
	zh_tw: {
		translation: zh_tw,
	},
	zh_cn: {
		translation: zh_cn,
	},
	ja: {
		translation: ja,
	},
	ko: {
		translation: ko,
	},
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'zh_tw',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
