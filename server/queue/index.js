let Queue = require('bull');

let PORT = '19499';
let HOST = 'ec2-52-202-160-22.compute-1.amazonaws.com';
let PASSWORD = 'p2be04e53cb71f4970daa5e90bc1f15f0c2086fd2850609eef7c057babf2051aa';

export const produce = async (queue, body, userId) => {

	try {
		let realmQueue = new Queue(queue, {redis: {port: PORT, host: HOST, password: PASSWORD }}); 
		await realmQueue.add({ body: body, userId: userId, organizationId: '' });
		realmQueue.close(); 
	} catch (error) {
		console.log('error', error); 
	}

}