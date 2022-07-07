import chalk from 'chalk';
import { prompt } from 'inquirer';
import { deleteComment } from '../controllers/delete-comment';
import { deletePackage } from '../controllers/delete-package';
import { searchPackageByName } from '../userController/serch-package';
import { userCreatePackage } from '../userController/user-create-package';
import { getUserPackages } from '../userController/view-user-package';

 // Tell user about available options
export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: `Hello User 🫡, please choose an option 👀!`,
		choices: [
			
			'1- View your packages 🥸',
			'2- Add a new package 😻',
			//'- Update your package 🥳',
			'3- Delete your package ❌',
			 '4- Search package by name 🔍',	
            '5- Delete your comment',
			'6- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getUserPackages();
			break;

		case 2:
			await userCreatePackage ();
			break;

		
		case 3:
			await deletePackage();
			break;

		case 4:
			await searchPackageByName();
			break;
		
		case 5:
	    	await deleteComment()
			break;
		case 6:
			console.log(chalk.bgGreenBright('Bye 🪐!hope you enjoyed!⭐️ 💫'));
			console.log();
			console.log();
			console.log();

			process.exit(0);

		default:
			break;
	}
}
