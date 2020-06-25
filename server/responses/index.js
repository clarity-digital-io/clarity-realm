import { produce } from "../queue";

export const updateResponses = (realm, updates, userId) => {

	const ready = [];
	let newResponses = realm.objects('Response__c');

	for(const answer in updates) {
		ready.push(newResponses[answer]);
	}

	produce('responses', ready, userId);

}
