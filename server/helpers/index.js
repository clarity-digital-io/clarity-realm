
export const transform = (objects) => {
	let transformedObjects = [];

	for (const obj in objects) {
		console.log('obj', obj, JSON.stringify(objects[obj])); 
		transformedObjects.push(objects[obj]); 
	}

	return transformedObjects; 
}
