import { proxy } from 'valtio';

const state = proxy({
	isFocusOnPhone: false,
	currentApp: '',
});

export default state;
