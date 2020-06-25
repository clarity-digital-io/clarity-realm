import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	const ready = [];
	for(const response in updates) {
		console.log('where does it break 0')

		console.log('newResponses[response]', newResponses[response], JSON.stringify(newResponses[response]));
		console.log('where does it break 1')
		ready.push(newResponses[response]);
	}

	produce('responses', ready, userId);

}
