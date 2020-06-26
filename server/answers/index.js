import { produce } from "../queue";

export const updateAnswers = (newAnswers, updates, userId) => {

	const ready = [];
	console.log('userId', userId); 
	for(const answer in updates) {
		ready.push(JSON.stringify(newAnswers[answer]));
	}
	console.log('ready', ready); 
	produce('answers', ready, userId);

}
