function ClozeCard(text, cloze) {
	//this is full text
	this.text = text;

	// this is answer portion
	this.cloze = cloze;
	
}

ClozeCard.prototype.showPartial = function () {
   var full = this.text;
   var partial = full.replace(this.cloze, "...");
   console.log(partial);
}


module.exports = ClozeCard;