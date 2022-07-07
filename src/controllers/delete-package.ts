import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deletePackage() {
	const { data: packages } = await axios.get(baseUrl + '/Package');
	const formattedPackages = packages.map((c: any) => ({ package_id:c.package_id,name: c.name, package_description: c.package_description,user_id:c.user_id }));
	console.table(formattedPackages);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const pack = packages[index];
	await axios.delete(baseUrl + `/package/${pack.package_id}`);
	console.log(`package for ${pack.name} has been deleted ✅`);
} 
