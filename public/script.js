function selectApron(apron) {
// Show dessert options
  window.location.href = 'dessertchoice.html';
}

function chooseDessert(dessert) {
  if (dessert === 'cake') {
    window.location.href = 'cake.html';  // Redirect to cake page
  } else if (dessert === 'icecream') {
    window.location.href = 'icecream.html';  // Redirect to ice cream page
  }
}
