import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl, /*token*/ } from '..';

export async function createPackage() {
	const packageData = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter package name 🔤 ',
		},
		{
			type: 'input',
			name: 'package_description',
			message: 'Enter package Description 💬 ',
		},{
			type: 'input',
			name: 'user_id',
			message: 'Enter your ID 🆔 ',

		}


	]);

const result	=await axios.post(
		baseUrl + '/createpackByUser',
		{
			//id: v4(),
			...packageData,
		},
		// {
		// 	// headers: {
		// 	// 	authorization: 'Bearer ' + /*token*/,
		// 	// },
		// }
	);
		console.log(result);
	// console.log(`package for ${packageData.name}
	// } , has been added ✅`);

	
}
