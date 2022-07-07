import axios from 'axios';
import chalk from 'chalk';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';


export async function neededInfo() {
	const { userInfo } = await prompt({
		type: 'list',
		name: 'userInfo',
		message: 'Please login or quit!',
		choices: ['Login', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});
    if (userInfo === 'quit') {
		console.log(chalk.bgRed.bold('Well ,Sorry you dont belong to our Community 😌,kidding! you arr welcome at any time 🥰'));
		console.log();
		console.log();

		process.exit(0);
	}else if(userInfo==='login'){
        console.log(chalk.bgGreenBright.bold('wonderful🤩!!, Please go to next step 🦁'))
		console.log();
		console.log();

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

	const result = await axios.post(baseUrl + '/login', {
				email,
				password,
			});
			if(result){
			const newToken = result.data.token;
			globalData.token = newToken;
return result		}
else{
	console.log('you dont have an account!')
	const newUser= await prompt([
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
		{
			type: 'input',
			name: 'name',
			message: 'Enter your name 🤫 ',
			}])

	try {
		const result = await axios.post(baseUrl + '/login', {
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
		
 
}
