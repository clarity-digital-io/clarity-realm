import { produce } from "../queue";

export const updateAnswers = (updates, userId) => {

	if(updates.length > 0) {
		produce('answers', JSON.stringify(updates), userId);
	}

}

export const insertAnswers = (inserts, userId) => {

	if(inserts.length > 0) {
		produce('answers', JSON.stringify(inserts), userId);
	}


}

export const deleteAnswers = (deletions, userId) => {

	let uuids = deletions.map(response => response.UUID);

	if(uuids.length > 0) {
		produce('delete-answers', JSON.stringify(uuids), userId);
	}

}