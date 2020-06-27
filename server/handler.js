import { updateAnswers } from './answers';
import { updateResponses, insertResponses, deleteResponses } from './responses';
import { updateAnswers, insertAnswers, deleteAnswers } from './answers';

export const handleChange = async function (changeEvent) {
	const matches = changeEvent.path.match("^/([^/]+)/([^/]+)$");
	const userId = matches[1];
	const changes = changeEvent.changes; 
	console.log('userId', userId); 
	let oldRealm = changeEvent.oldRealm;
	let realm = changeEvent.realm;

	if(changes.hasOwnProperty('Response')) {
		if(changes.Response.hasOwnProperty('deletions') && changes.Response.deletions.length > 0) {
			deleteResponses(changes.Response.deletions, userId); 
		}

		if(changes.Response.hasOwnProperty('newModifications') && changes.Response.newModifications.length > 0) {
			updateResponses(changes.Response.newModifications, userId); 
		}

		if(changes.Response.hasOwnProperty('insertions') && changes.Response.insertions.length > 0) {
			insertResponses(changes.Response.insertions, userId); 
		}

	}

	if(changes.hasOwnProperty('Answer')) {

		if(changes.Answer.hasOwnProperty('deletions') && changes.Answer.deletions.length > 0) {
			deleteAnswers(changes.Response.deletions, userId); 
		}

		if(changes.Answer.hasOwnProperty('newModifications') && changes.Answer.newModifications.length > 0) {
			updateAnswers(changes.Answer.newModifications, userId); 
		}

		if(changes.Answer.hasOwnProperty('insertions') && changes.Answer.insertions.length > 0) {
			insertAnswers(changes.Answer.insertions, userId); 
		}

	}

}

// 00554000005E3mEAAS

// a0754000002RgJyAAK