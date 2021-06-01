import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import _user from './database/_user';
import _role from './database/_role';
/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
	createProdMockServer([..._role, ..._user]);
}
