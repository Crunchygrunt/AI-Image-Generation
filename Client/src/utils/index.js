import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt){
    //return a random index from 1-49 
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    //retrieve random prompt
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}