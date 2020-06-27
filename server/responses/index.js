import { produce } from "../queue";

export const updateResponses = (updates, userId) => {

	if(updates.length > 0) {
		produce('responses', JSON.stringify(updates), userId);
	}

}

export const insertResponses = (inserts, userId) => {
	
	if(inserts.length > 0) {
		produce('responses', JSON.stringify(inserts), userId);
	}

}

export const deleteResponses = (deletions, userId) => {

	let uuids = deletions.map(response => response.UUID);

	if(uuids.length > 0) {
		produce('delete-responses', JSON.stringify(uuids), userId);
	}

}
