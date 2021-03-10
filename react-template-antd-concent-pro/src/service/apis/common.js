import r from "../request";
import { PREFIX_TEST } from "../vars";
// 接口示例
export const TEST_API = `${PREFIX_TEST}/test/api`;
export async function testApiFunc(...ops) {
  return r.length(...ops);
}
