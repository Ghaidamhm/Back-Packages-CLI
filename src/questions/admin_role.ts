import figlet from 'figlet';
import chalk from 'chalk';
import { prompt } from 'inquirer';
import { deleteUser } from '../controllers/cancel-user';
import { createPackage } from '../controllers/create-package';
import { deletePackage } from '../controllers/delete-package';
import { getPackages } from '../controllers/get-package';
import { searchPackage } from '../controllers/search-package';
import { updatePackage } from '../controllers/update-package';
import { getUsersInfo } from '../controllers/view-user-info';
import { deleteComment } from '../controllers/delete-comment';
import { viewComments } from '../controllers/view-comments';
export async function adminRole() {
	const { AR } = await prompt({
		type: 'list',
		name: 'AR',
		message: 'Hello admin 🤍 ,Please choose an action 🥰!',
		choices: [
			'1- View all packages 😍 ',
			'2- Add new package 🥳',
			'3- Update package ✨',
			'4- Delete package ❌',
			'5- Search package by name 🔍',
            '6- View all users information 😎',
            '7- Cancel any user membership 😡',
			'8- Delet comment',
			'9- View all comments',
			'0- Quit app 😔',
		],
		filter: (val) => +val[0],
	});
   
	switch (AR) {
		case 1:
			await getPackages();
			break;

		case 2:
			await createPackage();
			break;

		case 3:
			await updatePackage();
			break;

		case 4:
			await deletePackage();
			break;

		case 5:
			await searchPackage();
			break;

		case 6:
		    await getUsersInfo();
			break;

		case 7:
			await  deleteUser();
			break;
		case 8:
		await  deleteComment();
		break;
		case 9:
		await  viewComments();
		break;
		case 0:
			console.log(chalk.bgGreenBright(figlet.textSync('Bye Bye,have a nice day 🤍')))
			process.exit(0);
		default:
			break;
	}
}