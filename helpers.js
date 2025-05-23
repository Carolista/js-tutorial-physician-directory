// Import fs and readline-sync
const fs = require('fs');
const input = require('readline-sync');

// Transform JSON to JS
function getJSFromJSON(filePath) {
	const jsonData = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(jsonData);
}

// Sort results by last name
function sortByLastName(data) {
    data.sort((a, b) => a.lastName - b.lastName);
    // No return - it mutates the array
}

// Ask user for type of search & validate response
function getSearchType() {
	let options = `  0 - Search by name
  1 - Search by first letter of last name
  2 - Search by area code
  3 - Display all
`;
    let question = `
What kind of search would you like? 
${options}`;
	let searchType = input.question(question);
	// Validate
	while (searchType < 0 || searchType > 3 || isNaN(searchType)) {
		searchType = input.question(`
Please enter a valid number. ${question}`);
	}
	return searchType;
}

// Filter listings by name (check both first and last names for keyword)
function searchByName(data) {
	// Ask user for all or part of a name
	let searchTerm = input.question('\nPlease enter first OR last name: \n');
	// Validate for numbers or spaces
	while (searchTerm.includes(' ') || !isNaN(searchTerm)) {
		searchTerm = input.question(
			'\nNo numbers or spaces — please enter all or part of a first OR last name: \n'
		);
	}
	// Filter using search term
	return data.filter(doctor =>
		(doctor.firstName + doctor.lastName).toLowerCase().includes(searchTerm.toLowerCase())
	);
}

// Filter listings by first letter of last name
function searchByFirstLetter(data) {
	// Ask user for a letter
	let letter = input.question("\nWhich letter of the alphabet would you like to use to search last names?\n");
	// Validate user response to ensure it is just one letter
	while (!isNaN(letter) || letter.length > 1) {
		letter = input.question("\nPlease enter a single letter of the alphabet:\n");
	}
    // Filter using letter
	return data.filter(doctor => letter.toUpperCase() === doctor.lastName[0]);
}

// Filter listings by area code
function searchByAreaCode(data) {
	// Ask user for an area code
	let areaCode = input.question("\nWhich area code would you like to search? Choices are 314, 618, and 636:\n");
	// Validate user response
	while (!["314", "618", "636"].includes(areaCode)) {
		areaCode = input.question(`\nPlease enter a valid area code. Choices are 314, 618, and 636:\n`);
	}
	// Filter using area code
	return data.filter(doctor => doctor.phoneNumber.startsWith(areaCode));
}

// Format and print results
function displaySearchResults(results) {
    // Handle cases where results array has no records
	if (results.length === 0) {
		console.log("\nSorry, no results found. \n");
	} else {
		console.log("\nRESULTS *******************************\n");
		console.log(`${results.length} results found:\n`)
		results.forEach(doctor => {
			console.log(`Dr. ${doctor.firstName} ${doctor.lastName}`);
			console.log(`${doctor.phoneNumber}\n`);
        });
		console.log("***************************************");
	}
	// no return statement
}

module.exports = {
	getJSFromJSON,
    sortByLastName,
    getSearchType,
	searchByName,
	searchByFirstLetter,
	searchByAreaCode,
	displaySearchResults,
};
