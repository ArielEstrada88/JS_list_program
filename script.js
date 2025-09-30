// NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.

productArray = [];

function addProduct() {

  // Assignment 1
  // You need to change the id that this collects to product.
  let input = document.getElementById("product").value;

  // You will need to create a div using javascript,
  // Use this site to help you understand how: https://www.w3schools.com/jsref/met_document_createelement.asp
  let newDiv = document.createElement("div");

  // Once you create create a div,
  // you will need to get the output using the same method you did for the input
  // Except you do not need to include the value at the end.
  let output = document.getElementById("output");

  // CHALLENGE SECTION:
  // If you feel up for a challenge, try and use an if statement if(condition){run this code}
  // to return an alert if the input is empty...
  if (input === "") {
    alert("Please enter a product name!");
    return false;
  }

  // Assignment 2:
  // You need to put the value of the input into an array to call later.
  let newProduct = { name: input };
  productArray.push(newProduct);
  console.log(productArray);

  // Assignment 3:
  // Hint: Use a loop on your product array and set the max length...
  
  // Clear the input field
  document.getElementById("product").value = "";

  // Show the output div
  output.style.display = "block";

  // Clear previous entries from the output to avoid duplicates
  output.innerHTML = "";

  // Loop through productArray and display each product
  for (let i = 0; i < productArray.length; i++) {
    let div = document.createElement("div");
    div.textContent = `${productArray[i].name}`;
    output.appendChild(div);
  }

  // this line is to prevent the webpage from reloading. DO NOT MODIFY IT.
  return false;
}
