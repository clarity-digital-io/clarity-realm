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
		var realm = changeEvent.realm;

		var oldResponses = oldRealm.objects('Response__c');
		let transformedResponses = transform(oldResponses);

		var newResponses = realm.objects('Response__c');
		let newtransformedResponses = transform(newResponses);

		console.log('responses',transformedResponses);
		console.log('newResponses',newtransformedResponses);

		if(changeEvent.changes.Response__c.hasOwnProperty('newModifications')) {

			let responseIndexes = changeEvent.changes.Response__c.newModifications;

			for(const response in responseIndexes) {
				console.log('responses', response, newResponses[response]);
				console.log('oldResponses', response, oldResponses[response]);
			}

		}
	}
}

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
	listener(); 
});

const transform = (objects) => {
	let transformedObjects = [];

	for (const obj in objects) {
		console.log('obj', obj, JSON.stringify(objects[obj])); 
		transformedObjects.push(objects[obj]); 
	}

	return transformedObjects; 
}

// 26d1c9635a39ef37a3b6560f78c0a658
// salesforce-sandbox_00554000005E3mEAAS

// /salesforce-sandbox_00554000005E3mEAAS/user
// /salesforce-sandbox_0058A000004a1kfQAA/user