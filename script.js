//your JS code here. If required.
let targetElement = document.getElementById('level');
if (targetElement) {
    let level = 1; 
	let currentElement = targetElement;

    while (currentElement.parentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }
	  alert(`The level of the element is: ${level}`);
	} else {
    alert("The element with ID 'level' was not found in the DOM.");
}