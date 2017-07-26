var inquirer = require ("inquirer");
var ClozeCard = require ("./Clozecard.js");
var ClozeCards = require ("./cloze.json");
var fs = require ("fs");



function createClozeCard () {

//prompts user for question and answer that will make up flash card.
inquirer.prompt([
	{
		type: "input",
		name: "full",
		message: "Robin Williams won an Academy Award for best supporting actor in Good Will Hunting, a film about a South Boston janitor."

	}, {
		type: "input",
		name: "partial",
		message: "Robin ... won an Academy Award for best supporting actor in Good Will Hunting, a film about a South Boston janitor."
		
	}, {
		type: "input",
		name: "cloze",
		message: "Williams"
	}

]).then(function(inputs){

//creates new BasicCard object with front and back inputs
var flashClozeCard = new ClozeCard(inputs.text, inputs.cloze);
//console.log(flashCard);
//BasicCards.push(flashCard);
var newFlashClozeCard = JSON.stringify(flashCard, null, 2);
fs.appendFile("./basic.json", newFlashClozeCard);

	});
}
createClozeCard();
