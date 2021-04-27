import '@/configs/_runConcent';
import { registerI18n } from 'cxy-react-i18n';
import { render } from 'react-dom';
import Router from './router/index';
import '@/styles/index.less';
registerI18n();

render(<Router />, document.getElementById('root'));
