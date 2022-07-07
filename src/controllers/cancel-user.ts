import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteUser() {
	const { data: users } = await axios.get(baseUrl + '/user');
	const deleteUser = users.map((u: any) => ({ name: u.name }));
	console.table(deleteUser);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const user = users[index];
	await axios.delete(baseUrl + `/user/${user.user_id}`);
	console.log(`Contact for ${user.name} has been deleted ✅`);
}