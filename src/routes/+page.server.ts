

import {  fail } from '@sveltejs/kit';

import {writeFileSync} from 'fs'

export const actions = {
  //upload file action
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    
    if (!(formData.fileToUpload as File).name ||(formData.fileToUpload as File).name === 'undefined') {
      return fail(400, {
        error: true,
        message: 'You must provide a file to upload'
      });
    }

    const { fileToUpload } = formData as { fileToUpload: File };
    const maxSize = 5 * 1024 * 1024
    if (fileToUpload.size>maxSize){
        return fail(400,{
            error:true,
            message: 'The file is too big'
        })
    }
    writeFileSync(`upload/${fileToUpload.name}`,Buffer.from(await fileToUpload.arrayBuffer()))
    return { success:true,message: 'הקובץ הועלה בהצלחה' };
  }
  

};