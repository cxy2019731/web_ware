module.exports = {
	printWidth: 150, //一行的字符数，如果超过会进行换行，默认为80
	tabWidth: 4, //一个tab代表几个空格数，默认为2
	quoteProps: "as-needed", //对象属性的引号使用 as-needed|consistent|preserve
	trailingComma: "none", //是否使用尾逗号 es5|none|all
	arrowParens: "avoid", //在单独的箭头函数参数周围包括括号 always|avoid
	semi: true, //行位是否使用分号，默认为true
	useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
	singleQuote: false, //字符串是否使用单引号，默认为false，使用双引号
	jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号
	bracketSpacing: true, //在对象文字中的括号之间打印空格
	jsxBracketSameLine: false, //多行JSX元素的放在最后一行的末尾，而不是一个放在下一行
};
