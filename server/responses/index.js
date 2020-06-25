import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	const ready = [];
	for(const response in updates) {
		console.log('newResponses[response]', newResponses[response], JSON.stringify(newResponses[response]))
		ready.push(newResponses[response]);
	}

	produce('responses', ready, userId);

}
