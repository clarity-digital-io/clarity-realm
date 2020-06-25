import { produce } from "../queue";

export const updateAnswers = (realm, updates, userId) => {

	const ready = [];
	let newAnswers = realm.objects('Answer__c');

	for(const answer in updates) {
		ready.push(newAnswers[answer]);
	}

	produce('realm', ready, userId);

}
