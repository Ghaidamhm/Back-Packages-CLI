import chalk from 'chalk';
import axios from 'axios';
import { baseUrl } from '..';
import { prompt } from 'inquirer';

export async function getUserPackages() {

        const {user_id} = await prompt(
            {
                type: 'input',
                name: 'user_id',
                message: 'Enter user id 🆔 ',
            },
        )  
	const { data: Packages } = await axios.get(baseUrl + `/package/details/${user_id}`);
	const PackagesByUser = Packages.map((p: any) => ({ name: p.name, package_description: p.package_description }));
	console.table(PackagesByUser);
        
        }
 

