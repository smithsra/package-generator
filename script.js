var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var del = document.createElement("button")

	li.setAttribute("id", input.value);
	li.appendChild(document.createTextNode(input.value));
	
	del.setAttribute("id", "del".concat(input.value));
	del.appendChild(document.createTextNode("Delete"));

	li.appendChild(del);
	ul.appendChild(li);
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function processRow(event) {
	var chosen = event.path[0].id;
	var tag = document.getElementById(chosen);
	var tagName = tag.tagName;

	if (tagName === "BUTTON") {
		tag.parentElement.remove();
	} else {
		tag.classList.toggle("done");
	}
	
;}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.getElementById("list").addEventListener("click", processRow);