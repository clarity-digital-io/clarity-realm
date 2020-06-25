import { updateAnswers } from './answers';
import { updateResponses } from './responses';

export const handleChange = async function (changeEvent) {
	const matches = changeEvent.path.match("^/([^/]+)/([^/]+)$");
	const userId = matches[1];
	const oldRealm = changeEvent.oldRealm;
	const realm = changeEvent.realm;

	if(changeEvent.changes.hasOwnProperty('Response__c')) {

		if(changeEvent.changes.Response__c.hasOwnProperty('deletions')) {
			//deleteResponse will delete answers too
		}

		if(changeEvent.changes.Response__c.hasOwnProperty('newModifications')) {
			
			updateResponses(realm, changeEvent.changes.Response__c.newModifications, userId); 

		}

		if(changeEvent.changes.Response__c.hasOwnProperty('insertions')) {
			//insertResponse
		}

	}

	if(changeEvent.changes.hasOwnProperty('Answer__c')) {

		if(changeEvent.changes.Answer__c.hasOwnProperty('deletions')) {
			//deleteAnswer ? maybe not needed 
		}

		if(changeEvent.changes.Answer__c.hasOwnProperty('newModifications')) {
			let newAnswers = realm.objects('Answer__c');
			updateAnswers(newAnswers, changeEvent.changes.Answer__c.newModifications, userId); 
		}

		if(changeEvent.changes.Answer__c.hasOwnProperty('insertions')) {
			//insertAnswer
		}

	}

}