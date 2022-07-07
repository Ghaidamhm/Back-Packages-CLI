import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';
import { q2 } from '../questions/q2';

export async function addComment() {
    try{
	const { data: Packages } = await axios.get(baseUrl + '/Package');
	const formattedPackages = Packages.map((p: any) => ({ name: p.name, package_description: p.package_description ,user_id:p.user_id}));
	console.table(formattedPackages);
        
        
  const writeComment:any  =await prompt({
    type:'input',
    name:'writeComment',
    message:'Enter the index',
    filter:(val)=>+val,

  })
  const index=Packages
  await axios.post(baseUrl+'/createComment',
  {
    content:index.content,
  },
  {
    headers:{
        token:globalData.token,
    },
  }
  
  
  )
// try{
// const {data:myComment}=await axios.get(baseUrl+'/createComment');
// const formattedComment= myComment.map((c: any)=>({content:c.content, package_id:c.package_id}))
// console.table(formattedComment);

// }
    }


catch(error){
    
}}