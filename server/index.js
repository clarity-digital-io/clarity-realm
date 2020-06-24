import Realm from 'realm';
const SERVER_URL = 'https://forms-dev.us1a.cloud.realm.io';
const REALM_URL = 'realms://forms-dev.us1a.cloud.realm.io';

const listener = async () => {
	console.log('listener');
	try {
		const adminUser = await Realm.Sync.User.login(SERVER_URL, Realm.Sync.Credentials.nickname('realm-admin', true));
		const config = { serverUrl: REALM_URL, adminUser: adminUser, filterRegex: '/.*/' }
		Realm.Sync.addListener(config, 'change', handleChange)
	} catch (error) {
		console.log('error', error);
	}

}

const handleChange = async function (changeEvent) {

	var matches = changeEvent.path.match("^/([^/]+)/([^/]+)$");
	console.log('matches', matches);

	if(changeEvent.changes.hasOwnProperty('Response__c')) {
		if(changeEvent.changes.Response__c.hasOwnProperty('oldModifications')) {
			console.log(changeEvent.changes.Response__c.oldModifications); 
		}
	}
}

listener(); 