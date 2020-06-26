import { updateAnswers } from './answers';
import { updateResponses } from './responses';

export const handleChange = async function (changeEvent) {
	const matches = changeEvent.path.match("^/([^/]+)/([^/]+)$");
	const userId = matches[1];
	console.log('userId', userId); 
	let oldRealm = changeEvent.oldRealm;
	let realm = changeEvent.realm;

	if(changeEvent.changes.hasOwnProperty('Response')) {

		if(changeEvent.changes.Response.hasOwnProperty('deletions')) {
			//deleteResponse will delete answers too
		}

		if(changeEvent.changes.Response.hasOwnProperty('newModifications')) {
			let newResponses = realm.objects('Response');
			updateResponses(newResponses, changeEvent.changes.Response.newModifications, userId); 
		}

		if(changeEvent.changes.Response.hasOwnProperty('insertions')) {
			//insertResponse
		}

	}

	if(changeEvent.changes.hasOwnProperty('Answer')) {

		if(changeEvent.changes.Answer.hasOwnProperty('deletions')) {
			//deleteAnswer ? maybe not needed 
		}

		if(changeEvent.changes.Answer.hasOwnProperty('newModifications')) {
			let newAnswers = realm.objects('Answer');
			updateAnswers(newAnswers, changeEvent.changes.Answer.newModifications, userId); 
		}

		if(changeEvent.changes.Answer.hasOwnProperty('insertions')) {
			//insertAnswer
		}

	}

}