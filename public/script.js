function exitGame() {
  window.close();
}

function enterGame() {
  window.location.href = 'apronchoice.html'; 
}

function selectApron(apron) {
// Show dessert options
  window.location.href = 'dessertchoice.html';
}

function chooseDessert(dessert) {
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html'; 
  }
}
