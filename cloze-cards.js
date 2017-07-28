var inquirer = require ("inquirer");
var ClozeCard = require ("./Clozecard.js");
var ClozeCards = require ("./cloze.json");
var fs = require ("fs");



function createClozeCard() {


inquirer.prompt([
	//full text
	{
		type: "input",
		name: "text",
		message: "Please type in your full text..."
	}, {
	//cloze deletion 
		type: "input",
		name: "cloze",
		message: "Please type in the cloze..."
	}
]).then(function(inputs){

//Creates new ClozeCard object with text and cloze arguments
var flashCard = new ClozeCard(inputs.text, inputs.cloze);
console.log(flashCard);

//will show partial text of full statement (without the cloze piece)
flashCard.showPartial();

//pushing flashcard to ClozeCards variable
ClozeCards.push(flashCard);

//formatting the object in Clozecards variable
var newFlashClozeCard = JSON.stringify(ClozeCards, null, 2);

//writing the new content of ClozeCards to the cloze.json file
fs.writeFile("./cloze.json", newFlashClozeCard);

	});
}
//call createClozeCard function.
createClozeCard();
