/**
 * 获取指定数组中随机一项
 * @param {array} list 数组
 * @returns array item
 */
export function getRandomItem(list = []) {
  return list[Math.floor(Math.random() * list.length)];
}
/**
 * 生成指定个数的数组,可制定数组项
 * @param {number} max 生成个数
 * @param {function} renderFn 自定义数组项的函数
 * @returns array
 */
export function getNumsList(max = 100, renderFn) {
  const numbersArray = [];
  for (var i = 1; numbersArray.push(renderFn(i)) < max; );
  return numbersArray;
}
/**
 * 指定数组乱序
 * @param {array} list 数组
 * @returns array
 */
export function sequenceList(list = []) {
  return list.sort(function () {
    return Math.random() - 0.5;
  });
}
/**
 * 验证是否是数组
 * @param {any} obj 需要验证的值
 * @returns boolean
 */
export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}
