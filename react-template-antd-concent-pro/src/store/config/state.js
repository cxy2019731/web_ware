import zhCN from "antd/lib/locale/zh_CN";
import zhTW from "antd/lib/locale/zh-TW";
import enUS from "antd/lib/locale/en_US";
const state = {
  // antd全局配置
  antdConfig: {
    autoInsertSpaceInButton: true, //不移除按钮文件中间间隔
    componentSize: "small", //antd组件大小 small | middle | large
    dropdownMatchSelectWidth: true, //下拉菜单和选择器同宽,false=关闭虚拟滚动
    virtual: true, //虚拟滚动
    space: "small", //space间隔大小 'small' | 'middle' | 'large' | number
    locale: zhCN,
  },
};

export default state;
