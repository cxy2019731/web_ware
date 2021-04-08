/**
 * 获取指定范围内一个随机数
 * @param {number} max 最大值
 * @param {number} min 最小值
 * @returns number
 */
export function getRandom(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 验证是否是数字
 * @param {any} n 需要验证的值
 * @returns boolean
 */
export function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
