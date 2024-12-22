function startGame() {
// This will hide the homepage and present the apron selection.
  document.getElementById("intro").style.display = "none";
  document.getElementById("apronSelection").style.display = "block";
}

function selectApron(apron) {
  // Hide apron selection and show dessert choice
  document.getElementById("apronSelection").style.display = "none";
  document.getElementById("dessertChoice").style.display = "block";
}

function chooseDessert(dessert) {
  // This will redirect the user to the correct webpage based on their choice
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  // This will redirect to the cake decoration page
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html';  // redirect to the ice cream decoration page
  }
}
