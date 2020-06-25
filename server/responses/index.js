export const updateResponses = (realm, updates, userId) => {

	let newResponses = realm.objects('Response__c');

	for(const response in updates) {
		console.log(newResponses[response], JSON.stringify(newResponses[response]));
		console.log(oldResponses[response], JSON.stringify(oldResponses[response]));
	}

}
