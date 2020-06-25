import Realm from 'realm';
import express from 'express';

const SERVER_URL = 'https://forms-dev.us1a.cloud.realm.io';
const REALM_URL = 'realms://forms-dev.us1a.cloud.realm.io';
const PORT = process.env.PORT || 5000;

let app = express();

const listener = async () => {
	console.log('listener');
	try {
		const adminUser = await Realm.Sync.User.login(SERVER_URL, Realm.Sync.Credentials.nickname('realm-admin', true));
		const config = { serverUrl: REALM_URL, adminUser: adminUser, filterRegex: '/.*/user' }
		Realm.Sync.addListener(config, 'change', handleChange)
	} catch (error) {
		console.log('error', error);
	}

}

const handleChange = async function (changeEvent) {

	var matches = changeEvent.path.match("^/([^/]+)/([^/]+)$");
	//console.log('matches', matches);

	if(changeEvent.changes.hasOwnProperty('Response__c')) {
		// console.log(changeEvent.changes.Response__c); 
		// if(changeEvent.changes.Response__c.hasOwnProperty('oldModifications')) {
		// 	console.log(changeEvent.changes.Response__c.oldModifications); 
		// }
		var userId = matches[1];

		console.log('change', userId); 
		console.log('change', changeEvent.changes); 

		var oldRealm = changeEvent.oldRealm;

		var responses = oldRealm.objects('Response1__c');

		console.log('responses',responses);
		// if(changeEvent.changes.Response__c.hasOwnProperty('insertions')) {

		let responseIndexes = changeEvent.changes.Response__c.insertions;

		for(let responseIndex of responseIndexes) {
			console.log('responseIndex', responseIndexes[responseIndex]);
		}
		// }
	}
}

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
	listener(); 
});