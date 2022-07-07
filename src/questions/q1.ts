import axios from 'axios';
import chalk from 'chalk';
import inquirer, { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

//Lead  user the way to login or sign up 
export async function Q1() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Please ,Log in by Entering your Email📧 ,or you can Quit😔!',
		choices: ['Login', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log(chalk.bgRed('Well ,Sorry you dont belong to our Community 😌,kidding! you are welcome at any time 🥰'));
		console.log();
        console.log();
        console.log();
		process.exit(0);
	}
 
	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email please: 📨 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🤫 ',
		},
	]);

	
 
	try {
		const result = await axios.post(baseUrl + '/login/admin', {
			email,
			password,
		});
		const newToken = result.data.token;
		globalData.token = newToken;
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}
		
	



 



