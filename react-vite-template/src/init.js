// 初始化connect
import '@/configs/_runConcent';
// 初始化国际化
import { registerI18n, sm, sl, STORE_LANG_KEY } from 'cxy-react-i18n';
import i18nLocal from '@/i18n/index';

// 绑定常量到window
window.env = import.meta.env;
registerI18n();
sm(i18nLocal);
console.log(localStorage.getItem(STORE_LANG_KEY))
// sl(localStorage.getItem(STORE_LANG_KEY) || Object.keys(i18nLocal)[0]);
// console.log(cc.getComputed().i18nMessage)
