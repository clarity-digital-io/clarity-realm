import { produce } from "../queue";

export const updateAnswers = (realm, updates, userId) => {

	const ready = [];
	console.log('userId', userId); 
	let newAnswers = realm.objects('Answer__c');

	for(const answer in updates) {
		ready.push(newAnswers[answer]);
	}

	produce('answers', ready, userId);

}
