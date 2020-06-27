import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	let ready = [];
	for(const response in updates) {
		let sResponse = JSON.stringify(newResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 
		ready.push(parsedResponse);
	}

	if(ready.length > 0) {
		produce('responses dont send if empty', JSON.stringify(ready), userId);
	}

}

export const insertResponses = (inserts, userId) => {
	
	let ready = JSON.stringify(inserts); 

	if(JSON.parse(ready).length > 0) {
		produce('responses dont send if empty', ready, userId);
	}

}

export const deleteResponses = (oldResponses, deletions, userId) => {

	let ready = [];
	for(const response in deletions) {
		let sResponse = JSON.stringify(oldResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 
		ready.push(parsedResponse);
	}

	let uuids = ready.map(response => response.UUID)
	if(uuids.length > 0) {
		produce('delete-responses', JSON.stringify(uuids), userId);
	}
}
