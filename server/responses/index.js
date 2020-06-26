import { produce } from "../queue";

export const updateResponses = (newResponses, updates, userId) => {

	const ready = [];
	for(const response in updates) {
		let sResponse = JSON.stringify(newResponses[response]);
		let parsedResponse = JSON.parse(sResponse); 

		ready.push(parsedResponse);
	}

	let prep = prepare(ready);

	produce('responses', JSON.stringify(prep), userId);

}

const prepare = (ready) => {
	return ready.map(response => {
		if(response.hasOwnProperty('Answers__r')) {
			delete response.Answers__r;
		}
		if(response.hasOwnProperty('Id')) {
			delete response.Id;
		}
		return response; 
	})
}
