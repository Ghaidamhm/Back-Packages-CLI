import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function updatePackage() {
	const { data: packages } = await axios.get(baseUrl + '/package');
	const formattedPackage = packages.map((p: any) => ({ name: p.name, package_description: p.package_description,user_id:p.user_id }));
	console.table(formattedPackage);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const myPackage = packages[index];

	const newPackage = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${myPackage.name})`,
			filter: (val) => {
				if (val.trim() === '') return myPackage.name;
				return val;
			},
		},
		{
			type: 'input',
			name: ' package_Description',
			message: `Enter new  package Description or press enter to keep it as (${myPackage.package_description})`,
			filter: (val) => {
				if (val.trim() === '') return myPackage.package_description;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/package/${myPackage.package_id}`, newPackage);

	console.log(`Package for ${newPackage.name}, has been updated ✅`);
}
