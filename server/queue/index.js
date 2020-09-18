let Queue = require('bull');

let PORT = '22539';
let HOST = 'ec2-54-198-67-0.compute-1.amazonaws.com';
let PASSWORD = 'pa52ef8b5d034514d7e08a40ae7be9213d85032d1255a43b6393b948832e172cd';

export const produce = async (queue, body, userId) => {
	console.log('body', body); 
	try {
		let realmQueue = new Queue(queue, {redis: {port: PORT, host: HOST, password: PASSWORD }}); 
		await realmQueue.add({ body: body, userId: userId, organizationId: '00D2F000000AiZOUA0' });
		realmQueue.close(); 
	} catch (error) {
		console.log('error', error); 
	}

}