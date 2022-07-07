import figlet from 'figlet';
import chalk from 'chalk';
import { adminRole } from './questions/admin_role';
import { Q1 } from './questions/q1';
import { q2 } from './questions/q2';
import { neededInfo } from './questions/user_login';

export const baseUrl = 'http://0.0.0.0:3000';
export let globalData: any = {
	token: '',
};
let gg = '';
	
 	/// Display welcome message
console.log(chalk.yellowBright(figlet.textSync('WELCOME AT ', { horizontalLayout: 'full' ,width:100})));

console.log();
console.log(chalk.yellowBright.bold(figlet.textSync(' Back packages Website =)',{  horizontalLayout:'full',width:100,  whitespaceBreak: true })));
console.log();
console.log(chalk.rgb(200,250,400).bgBlack('where The Backend "Developers" life become easier 🎉 🍭'));
console.log();
console.log();
console.log();
console.log();
console.log();
async function start() {
console.log();
console.log();
	console.log();
	console.log();
	await Q1();
	console.log();
	console.log();
	while (true){
    await adminRole();}

// console.log();
// console.log();
	
	// await neededInfo();
	// await q2();
   
	// while (true) {
	// 	await q2();
	// 	console.log();
	// 	console.log();
	// }


}




 start();