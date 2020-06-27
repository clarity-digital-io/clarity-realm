import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {
	// console.log('JSON.stringify', JSON.stringify(updates))
	// let ready = [];
	// for(const response in updates) {
	// 	let sResponse = JSON.stringify(newResponses[response]);
	// 	console.log('sResponse', sResponse, response, JSON.stringify(response)); 
	// 	let parsedResponse = JSON.parse(sResponse); 
	// 	ready.push(parsedResponse);
	// }

	if(updates.length > 0) {
		produce('responses', JSON.stringify(updates), userId);
	}

}

export const insertResponses = (inserts, userId) => {
	
	let ready = JSON.stringify(inserts); 
	console.log('ready', ready, JSON.parse(ready).length);
	if(JSON.parse(ready).length > 0) {
		console.log('what');
		produce('responses', ready, userId);
	}

}

export const deleteResponses = (oldResponses, deletions, userId) => {

	let ready = [];
	for(const response in deletions) {
		let sResponse = JSON.stringify(oldResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 
		ready.push(parsedResponse);
	}

	let uuids = ready.map(response => response.UUID);
	console.log('uuids', ready, uuids);
	if(uuids.length > 0) {
		produce('delete-responses', JSON.stringify(uuids), userId);
	}
}
