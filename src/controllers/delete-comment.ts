import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteComment() {
	const { data: comment } = await axios.get(baseUrl + '/comments');
	const deletedComment = comment.map((c: any) => ({ content:c.content,package_id:c.package_id,user_id:c.user_id }));
	console.table(deletedComment);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const theComment = comment[index];
	await axios.delete(baseUrl + `/comment/${theComment.comment_id}`);
	console.log(`comment for ${theComment.content} has been deleted ✅`);
} 