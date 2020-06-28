import { encode } from 'base64-arraybuffer';
import { produce } from "../queue";

export const updateAnswers = (updates, userId) => {

	if(updates.length > 0) {
		produce('answers', JSON.stringify(updates), userId);
	}

}

export const insertAnswers = (inserts, userId) => {

	let transformedInserts = inserts.map(answer => {

		if(answer.ContentDocument != null) {
			var base64 = encode(answer.ContentDocument); 
			answer.ContentDocument = base64;
			return answer; 
		} 

		return answer; 

	});

	if(inserts.length > 0) {
		produce('answers', JSON.stringify(transformedInserts), userId);
	}

}