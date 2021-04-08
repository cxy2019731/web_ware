/**
 * 生成指定长度的随机字母数字字符串
 * @param {number} len 指定长度
 * @returns
 */
export function generateRandomAlphaNum(len = 24) {
  let rdmString = "";
  for (
    ;
    rdmString.length < len;
    rdmString += Math.random().toString(36).substr(2)
  );
  return rdmString.substr(0, len);
}

/**
 * 为字符串添加trim方法 | 字符串去空格
 */
export function trim(str = "") {
  if (str) {
    return str.replace(/^\s+|\s+$/g, "");
  } else {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, "");
    };
  }
}
