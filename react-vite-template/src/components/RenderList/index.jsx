import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
/**
 * 遍历封装-只需关注渲染函数
 * @param {object} props 参数
 * 		data?:渲染数据集   array
 *  	onKey?:唯一值自定义,可为元素属性值或函数   function(item,index){}
 * 		render?:属性定义遍历渲染函数,优先级最高   function(item,index){}
 * 		empty?:为空时显示的内容
 * 		children?:默认插槽定义遍历函数   function(item,index){}
 * 		classItem?:每一项外层的类名	  function(item,index){} | string
 * 		styleItem?:每一项的内联样式	  function(item,index){} | object
 * 		onClickItem?:每一项的点击事件   function(item,index){}
 * @returns list node
 */
function RenderList(props) {
	const { data = [], onKey, render, empty, children, classItem = null, styleItem = null, onClickItem = null } = props;
	// 处理每一项的key
	const __render_key = (item, index) => {
		if (typeof onKey === 'string' && item && item[onKey]) {
			return item[onKey];
		}
		if (typeof onKey === 'function') {
			return onKey(item, index);
		}
		return uuidv4();
	};

	// 处理每一项的渲染
	const __render_item = (item, index) => {
		if (render) {
			return render(item, index);
		}
		if (children) {
			return children(item, index);
		}

		return null;
	};

	// 渲染控制
	const __render = () => {
		if (!data.length || (!render && !children)) {
			return empty || null;
		}

		return data.map((item, index) => (
			<ul
				style={{
					position: 'relative',
					...styleItem,
				}}
				onClick={onClickItem}
				key={__render_key(item, index)}>
				{__render_item(item, index)}
			</ul>
		));
	};

	return <>{__render()}</>;
}

export default memo(RenderList);
