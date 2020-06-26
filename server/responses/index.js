import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	const ready = [];
	for(const response in updates) {
		let sResponse = JSON.stringify(newResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 
		ready.push(parsedResponse);
	}

	produce('responses', JSON.stringify(ready), userId);

}

export const insertResponses = (inserts, userId) => {

	const ready = [];
	console.log('insertResponses', JSON.stringify(inserts));

	produce('responses', JSON.stringify(inserts), userId);

	// for(const response in updates) {
	// 	let sResponse = JSON.stringify(newResponses[response]);
	// 	let parsedResponse = JSON.parse(sResponse); 
	// 	ready.push(parsedResponse);
	// }

	//produce('responses', JSON.stringify(ready), userId);

}

export const deleteResponses = (inserts, userId) => {

	const ready = [];
	console.log('insertResponses', JSON.stringify(inserts));
	// for(const response in updates) {
	// 	let sResponse = JSON.stringify(newResponses[response]);
	// 	let parsedResponse = JSON.parse(sResponse); 
	// 	ready.push(parsedResponse);
	// }

	//produce('responses', JSON.stringify(ready), userId);

}
