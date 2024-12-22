function startGame() {
// Hide the intro and show the apron selection
  document.getElementById("intro").style.display = "none";
  document.getElementById("apronSelection").style.display = "block";
}

function selectApron(apron) {
// You can store the selected apron in a session or use it later
  console.log("User selected: " + apron);
  // Hide apron selection and show dessert choice
  document.getElementById("apronSelection").style.display = "none";
  document.getElementById("dessertChoice").style.display = "block";
}

function chooseDessert(dessert) {
// Redirect the user to the appropriate page based on their choice
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  // Redirect to the cake decoration page
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html';  // Redirect to the ice cream decoration page
  }
}
