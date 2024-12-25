import { json } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import path from 'path';

//path for the files
const filesDir = path.resolve('upload');

export async function GET() {
  try {
    //read all the files name
    const files = await readdir(filesDir);

    return json({ files });
  } catch (error) {
    console.error(error);
    return json({ error: 'Failed to read files directory' }, { status: 500 });
  }
}
