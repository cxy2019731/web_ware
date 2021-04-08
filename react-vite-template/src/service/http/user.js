/*
 * @Author: itmanyong
 * @Date: 2021-04-08 15:07:28
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:10:13
 * @FilePath: \react-vite2-template\src\service\http\user.js
 */
import request from "request";
// 获取指定用户信息
export const USER_INFO_GET = ``;
export async function getUserInfo(userId) {
  return request(USER_INFO_GET, {
    data: {
      id: userId,
    },
  });
}
