import chalk from 'chalk';
import axios from 'axios';
import { baseUrl } from '..';

export async function getPackages() {
	const { data: Packages } = await axios.get(baseUrl + '/Package');
	const formattedPackages = Packages.map((p: any) => ({ name: p.name, package_description: p.package_description ,user_id:p.user_id}));
	console.table(formattedPackages);
}
