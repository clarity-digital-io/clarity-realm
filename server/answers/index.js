import { produce } from "../queue";

export const updateAnswers = (newAnswers, updates, userId) => {

	const ready = [];

	for(const answer in updates) {
		let sAnswer = JSON.stringify(newAnswers[answer]); 
		ready.push(JSON.parse(sAnswer));
	}
	produce('answers', JSON.stringify(ready), userId);

}
