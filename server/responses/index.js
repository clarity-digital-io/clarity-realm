import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	let ready = [];
	for(const response in updates) {
		let sResponse = JSON.stringify(newResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 
		ready.push(parsedResponse);
	}

	produce('responses', JSON.stringify(ready), userId);

}

export const insertResponses = (inserts, userId) => {

	produce('responses', JSON.stringify(inserts), userId);

}

export const deleteResponses = (oldResponses, deletions, userId) => {

	let ready = [];
	for(const response in deletions) {
		let sResponse = JSON.stringify(oldResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 
		ready.push(parsedResponse);
	}

	let uuids = ready.map(response => response.UUID)
	console.log('uuids', uuids); 
	produce('delete-responses', JSON.stringify(uuids), userId);
}
