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
	//console.log('matches', matches);

	if(changeEvent.changes.hasOwnProperty('Response__c')) {
		// console.log(changeEvent.changes.Response__c); 
		// if(changeEvent.changes.Response__c.hasOwnProperty('oldModifications')) {
		// 	console.log(changeEvent.changes.Response__c.oldModifications); 
		// }
		var userId = matches[1];

		console.log('change', userId); 
		var realm = changeEvent.realm;

		var coupons = realm.objects('Response__c');

		console.log('coupons', changeEvent.changes.Response__c);
		if(changeEvent.changes.Response__c.hasOwnProperty('newModifications')) {

			var couponIndexes = changeEvent.changes.Response__c.newModifications;

			for(let couponIndex of couponIndexes) {
				console.log('couponIndex', couponIndex);
				var coupon = coupons[couponIndex];
				console.log('coupon', coupon);
			}
		}
	}
}

listener(); 