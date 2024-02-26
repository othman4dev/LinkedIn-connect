//This script was writen by Otman Kharbouch.

//Selects all the divs with .mt2 class
document.querySelectorAll('.mt2').forEach(element => {
    //Selects the button inside each div
    let button = element.querySelector('button');
    //checks if the buttons was already clicked
    if (button.getAttribute('aria-label') !== "Pending, click to withdraw invitation sent to Fatima Zahrae Bahadou") {
        //clicks the button
        button.click();
        //logs the buttons that were clicked
        console.log(element.querySelector('button'));
        //selects the div that contains the connections
        const divElement = document.getElementById('ember/*replace with the number you copied*/');
        //scrolls to the bottom of the div
        divElement.scrollTop = divElement.scrollHeight;
    }
});