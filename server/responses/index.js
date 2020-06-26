import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	const ready = [];
	for(const response in updates) {
		let sResponse = JSON.stringify(newResponses[response]);
		ready.push(JSON.parse(sResponse));
	}

	produce('responses', JSON.stringify(ready), userId);

}