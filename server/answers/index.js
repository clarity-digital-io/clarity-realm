import { produce } from "../queue";

export const updateAnswers = (newAnswers, updates, userId) => {

	const ready = [];
	console.log('userId', userId); 
	for(const answer in updates) {
		let sAnswer = JSON.stringify(newAnswers[answer]); 
		ready.push(JSON.parse(sAnswer));
	}
	console.log('ready', ready); 
	produce('answers', JSON.stringify(ready), userId);

}
