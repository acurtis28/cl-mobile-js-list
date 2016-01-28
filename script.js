var input;
var items = [];

while(input != ""){
	input = prompt("Enter item");
  items.push(input);
}

var toDisplay = "";
for (var i = 1; i < items.length;i++){
	var line = items[i-1];
	toDisplay  += i + ". " + line + " \n";
}
alert(toDisplay);
