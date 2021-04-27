import { sm } from 'cxy-react-i18n';
import { useEffect } from 'react';
import i18nLocal from '@/i18n/index';

export default (props) => {
	useEffect(() => {
		// 初始化i18n配置
		sm(i18nLocal);
	}, []);
	return (
		<>
			{props.children}
		</>
	);
};
