
import axios from 'axios';
import { baseUrl } from '..';

export async function viewComments() {
	const { data: allComments } = await axios.get(baseUrl + '/comments');
	const getComments= allComments.map((c: any) => ({ content: c.content,package_id:c.package_id,user_id:c.user_id }));
	console.table(getComments);
}