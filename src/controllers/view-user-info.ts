
import axios from 'axios';
import { baseUrl } from '..';

export async function getUsersInfo() {
	const { data: users } = await axios.get(baseUrl + '/user');
	const usersInfo= users.map((u: any) => ({ name: u.name, email: u.email }));
	console.table(usersInfo);
}