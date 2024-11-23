// Get the current date
const currentDate = new Date().toLocaleString();

// Display the date in the <p> element with id "date"
document.getElementById(
  "date"
).innerText = `Current Date and Time: ${currentDate}`;
