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

	produce('responses', JSON.stringify(inserts), userId);

}

export const deleteResponses = (deletions, userId) => {
	console.log('deletions', deletions); 
	//produce('delete-responses', JSON.stringify(deletions), userId);
}
