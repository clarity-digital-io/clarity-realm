import { encode } from 'base64-arraybuffer';
import { produce } from "../queue";

export const updateAnswers = (updates, userId) => {

	if(updates.length > 0) {
		produce('answers', JSON.stringify(updates), userId);
	}

}

export const insertAnswers = (inserts, userId) => {
	let cds = [];

	inserts.forEach(answer => {
		
		if(answer.ContentDocument != null) {
			var base64 = encode(answer.ContentDocument); 
			cds.push(base64); 
		} 

	});

	console.log('cds', cds); 

	if(inserts.length > 0) {
		produce('answers', JSON.stringify(inserts), userId);
	}

}