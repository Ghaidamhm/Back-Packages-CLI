import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function  searchPackage() {
	const name= await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search 🔤 ',
		}
	]);

	const { data: packages } = await axios.get(baseUrl + '/Package', {
		params: name,
	});
	const formattedPackage = packages.map((p: any) => ({ name: p.name, package_description: p.package_description , user_id:p.user_id}));
	console.table(formattedPackage);
}
