import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	const ready = [];
	for(const response in updates) {
		ready.push(newResponses[response]);
	}

	produce('responses', ready, userId);

}
