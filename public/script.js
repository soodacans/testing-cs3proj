//When the user chooses to exit, this will close the window
function exitGame() {
  window.close();
}

//When the user chooses to enter the game, this will bring them to the apron webpage
function enterGame() {
  window.location.href = 'apronchoice.html'; 
}

//Once the user is done choosing, they will be brought to the dessert webpage to choose
function selectApron(apron) {
// Show dessert options
  window.location.href = 'dessertchoice.html';
}

//Depending on which the user chose, they will be brought to the corresponding webpage
function chooseDessert(dessert) {
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html'; 
  }
}
