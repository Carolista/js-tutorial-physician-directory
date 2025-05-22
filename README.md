## PHYSICIAN DIRECTORY - INSTRUCTIONS

The goal of this exercise is to learn how to break down a program into small, achievable parts and think through what order things should be in and how it should all fit together. 

### THE SEARCH
You are going to create a small program that allows a resident in the St. Louis area to find the names and numbers of local doctors. They should be able to search by name, first letter of last name, or area code, and you should also give them the option to view all.

- If searching by name, the user should enter just a first name OR a last name. Partial names should generate matches as well (substrings).
- If searching by area code - there are three choices: 314, 636, and 618.

Validate all input so that the user is prompted again and they understand what they need to do differently for a proper search. Make sure to handle case sensitivity where needed.

### THE OUTPUT
Search results should be alphabetized by last name and formatted with each doctor's name and number on separate lines, with a space in-between each listing, like this:

```
Dr. Allison Cameron
636-555-1990

Dr. Janet Fraiser
618-555-8473

Dr. Benjamin "Hawkeye" Pierce
314-555-1886
```

You can customize how you would like to display the results otherwise.

### NEW SEARCHES
After results are displayed, user should be asked if they wish to perform another search. If they don't want to continue, the program should end with some kind of closing message to the user.

### THE DATA
The data for each doctor has been given to you in a JSON file. Use the `fs` module built into Node to create an array of JavaScript objects instead.

### ORGANIZING YOUR CODE
All minor functions should go in `helpers.js` module
Major function to run full program should go in `index.js`

### RUNNING YOUR PROGRAM
The `package.json` file is configured so you can simply run the command `npm start` from the terminal in this directory and it will perform `node index.js`.
