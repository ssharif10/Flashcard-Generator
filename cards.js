//calling correct requirements
var inquirer = require ("inquirer");
var BasicCard = require ("./BasicCard.js");
var BasicCards = require ("./basic.json");
var fs = require ("fs");

//function to create card
function createBasicCard () {

//prompts user for question and answer that will make up flash card.
inquirer.prompt([
	{
		type: "input",
		name: "front",
		message: "What is your question?"

	}, {
		type: "input",
		name: "back",
		message: "What is the answer?"
	}
]).then(function(inputs){

//creates new BasicCard object with front and back inputs
var flashCard = new BasicCard(inputs.front, inputs.back);
//console.log(flashCard);

var newFlashCard = JSON.stringify(flashCard, null, 2);
fs.appendFile("./basic.json", newFlashCard);

	});
}
createBasicCard();
