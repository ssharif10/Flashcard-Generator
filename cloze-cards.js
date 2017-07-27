var inquirer = require ("inquirer");
var ClozeCard = require ("./Clozecard.js");
var ClozeCards = require ("./cloze.json");
var fs = require ("fs");



function createClozeCard() {


inquirer.prompt([
	//full text
	{
		type: "input",
		name: "full",
		message: "Robin Williams won an Academy Award for best supporting actor in Good Will Hunting, a film about a South Boston janitor."
		
	}, {
	//cloze deletion 
		type: "input",
		name: "cloze",
		message: "Williams"
	}
]).then(function(inputs){

	var cloze = inputs.cloze;
	var text = inputs.full;


var flashCard = new ClozeCard(inputs.cloze, inputs.text).
console.log(flashCard);
var newFlashClozeCard = JSON.stringify(flashCard, null, 2);
fs.appendFile("./cloze.json", newFlashClozeCard);

	});
}
createClozeCard();
