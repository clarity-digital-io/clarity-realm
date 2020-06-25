import Realm from 'realm';
import express from 'express';
import { handleChange } from './handler';

const SERVER_URL = 'https://forms-dev.us1a.cloud.realm.io';
const REALM_URL = 'realms://forms-dev.us1a.cloud.realm.io';
const PORT = process.env.PORT || 5000;

let app = express();

const listener = async () => {

	try {
		const adminUser = await Realm.Sync.User.login(SERVER_URL, Realm.Sync.Credentials.nickname('realm-admin', true));
		const config = { serverUrl: REALM_URL, adminUser: adminUser, filterRegex: '/.*/user' }
		Realm.Sync.addListener(config, 'change', handleChange)
	} catch (error) {
		console.log('error', error);
	}

}

app.listen(PORT, () => {
	listener(); 
});