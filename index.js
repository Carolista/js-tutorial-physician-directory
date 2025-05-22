/**** IMPORTS ****/

// TODO: import readline-sync library & helper functions
const input = require('readline-sync');
const {
	getJSFromJSON,
    getSearchType,
	searchByName,
	searchByFirstLetter,
	searchByAreaCode,
	displaySearchResults,
    sortByLastName,
} = require('./helpers.js');

/**** DATA ****/

// TODO: Transform data
const doctorData = getJSFromJSON('./doctors.json');

// TODO: Sort data by last name
sortByLastName(doctorData);

// TODO: Collect 3 search functions in an array (corresponding to types)
const searchFunctions = [searchByName, searchByFirstLetter, searchByAreaCode];

/**** MAIN FUNCTION ****/

// TODO: Put everything together in a single function
function runProgram() {
	
    // Display intro to user
	console.log("Welcome to the Directory of Physicians for the St. Louis Metropolitan Area!\n");
	let keepSearching = true;

	// Start loop
	while (keepSearching) {
		// Find out which search type the user wants
		let index = getSearchType();
		let results; // declare only
        
		// Conduct corresponding search
		if (index === '3') {
			// If index 3, just get all listings
			results = doctorData.slice(0);
		} else {
			// If index 0-2, use corresponding search function
			results = searchFunctions[index](doctorData);
		}

		// Display results
		displaySearchResults(results);

		// Ask if user wants to search again
		if (input.question("\nAnother search? (Y/N) ").toUpperCase() !== "Y") {
			keepSearching = false;
		}		
	}
	// End program
	console.log("\nThank you for using our directory!\n")
}

// TODO: Call main function so that program will run
runProgram();
