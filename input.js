function handleUserInteraction() {
       
    let userInput = prompt("Please enter some input:");


    if (userInput !== null) {
  
        let isConfirmed = confirm(`You entered: "${userInput}". Is this correct?`);


        if (isConfirmed) {
            alert(`Confirmed! You entered: "${userInput}"`);
        } else {
 
            alert("You cancelled the confirmation.");
        }
    } else {
      
        alert("You cancelled the input.");
    }
}


handleUserInteraction();