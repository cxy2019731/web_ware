/**
 * 获取指定dom节点的指定css属性
 * @param {element} elem dom节点 ref需要传入ref.current
 * @param {string} prop 属性名
 * @returns number | string
 */
export function getStyle(elem, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(elem, null)[prop];
	} else {
		return elem.currentStyle[prop];
	}
}

/**
 * 获取当前dom的影响布局的高度，包括height/padding/border/margin
 * @param {element} domRef dom节点，ref需要传入ref.current
 * @returns number
 */
export function getStyleFullHeight(domRef) {
	const pagHeight = getStyle(domRef, "height").replace("px", "");
	const pagPaddingT = getStyle(domRef, "padding-top").replace("px", "");
	const pagPaddingB = getStyle(domRef, "padding-bottom").replace("px", "");
	const pagMarginT = getStyle(domRef, "margin-top").replace("px", "");
	const pagMarginB = getStyle(domRef, "margin-bottom").replace("px", "");
	const pagBorderT = getStyle(domRef, "border-top-width").replace("px", "");
	const pagBorderB = getStyle(domRef, "border-bottom-width").replace("px", "");
	const pagBox = getStyle(domRef, "box-sizing");

	let h = Number(pagHeight) + Number(pagMarginT) + Number(pagMarginB);
	if (pagBox != "border-box") {
		h = h + Number(pagPaddingT) + Number(pagPaddingB) + Number(pagBorderT) + Number(pagBorderB);
	}
	return h;
}
