import { produce } from "../queue";

export const updateAnswers = (updates, userId) => {

	if(updates.length > 0) {
		produce('answers', JSON.stringify(updates), userId);
	}

}

export const insertAnswers = (inserts, userId) => {
	console.log('inserts[1].ContentDocument', inserts[1].ContentDocument); 
	console.log('answers', JSON.stringify(inserts[1].ContentDocument)); 

	if(inserts.length > 0) {
		produce('answers', JSON.stringify(inserts), userId);
	}

}