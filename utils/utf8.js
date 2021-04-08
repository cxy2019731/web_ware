/**
 * 使用utf-8字符集进行base64编码
 * @param {string} str 字符串
 * @returns string
 */
function utoa(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
/**
 * 使用utf-8字符集解析base64字符串
 * @param {string} str 字符串
 * @returns string
 */
function atou(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
