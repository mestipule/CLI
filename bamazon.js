//i need to create a mysql variable
var mysql = require ("mysql");

require("console.table")
//create variable for connection
var connection = mysql.createConnection({
  //with host, port, user, password and databas
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function(err){
  if (err) {
    console.error(err.stack);
  } 
  displayInStock();
});
function displayInStock() {
  connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
    console.table(res);
    promptCustomer(res);
  });
}
function promptCustomer(inventory){
  inquirer
    .prompt([{
      type: "input",
      name: "choice",
      message: "What is the id of the item you want to purchase?",
      validate: function (value) { return !isNaN(value) || value.toLowerCase === "q" }
    }])
    .then( function(value){
      checkIfShouldExit(value.choice);
      var choiceId = parseInt(value.choice);
      var product = checkInventory(choiceId, inventory);
      
      if (product){
        promptCustomerQuantity(product);
      }
      else{
        console.log("Product not in the inventory!")
        displayInStock();
      }
    });
}

// Prompt the customer for a product quantity
function promptCustomerForQuantity(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like? [Quit with Q]",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.quantity);
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run loadProducts
      if (quantity > product.stock_quantity) {
        console.log("\nInsufficient quantity!");
        loadProducts();
      }
      else {
        // Otherwise run makePurchase, give it the product information and desired quantity to purchase
        makePurchase(product, quantity);
      }
    });
}

// Purchase the desired quantity of the desired item
function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      // Let the user know the purchase was successful, re-run loadProducts
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      loadProducts();
    }
  );
}

// Check to see if the product the user chose exists in the inventory
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      // If a matching product is found, return the product
      return inventory[i];
    }
  }
  // Otherwise return null
  return null;
}

// Check to see if the user wants to quit the program
function checkIfShouldExit(choice) {
  if (choice.toLowerCase() === "q") {
    // Log a message and exit the current node process
    console.log("Goodbye!");
    process.exit(0);
  }
}





// 


// create function for node, will display items on sale
//   this function should display id, name and price
// funtion displayInStock() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "Please choose which information you want to see?",
//       choices: [
//         "ID",
//         "Name",
//         "Price"
//       ]
//     })
//     .then(function(anwser){
//       switch (answer.action){
//         case "ID":
//         queryItems();
//         breake;

//         case "Name":
//         queryItems();
//         breake;

//         case "Price":
//         queryItems();
//         breake;
//       }
//     });
// }
// function queryItems() {

//     .prompt({
//       name: "action",
//       type: "list",
//       message: "Please choose which information you want to see?",
//       choices: [
//         "ID",
//         "Name",
//         "Price"
//       ]
//     })
//       .then(function(answer){
//         console.log(answer.)
//       })
// }
// create a prompt function that will ask customer what id they want to buy
// create a prompt function that will ask the customer many unit they want to buy
// create a function that will check the available unit in stock_quantity
//   if the stocks is not enough, message should display "Insufficient quantity"
// create function that will fullfil customer order
//     create function that will update sql when something got bouth
//     create function that will compute the amount of total cost of the purchase
// create bamazonManager.js
// create a menu option (maybe a function????)
// create functon for the manager to view products for sale
// create functon for the manager to view low inventory
// create functon for the manager to add inventory
// create functon for the manager to view producs for sale
// create functon for the manager to aview low inventoname
// create over_head_cost
// create a mysql table departments
//   create department_id
//   create department_name
//   create over_head_cost
// create bamazonSupervisor.js
//   create option menu
//     sale products by departments
//     creat new departments
//   create function that will show product sale that display
//   | department_id | department_name | over_head_costs | product_sales | total_profit |
// | ------------- | --------------- | --------------- | ------------- | ------------ |
// | 01            | Electronics     | 10000           | 20000         | 10000        |
// | 02            | Clothing        | 60000           | 100000        | 40000        |
//   create a custom alias that will show the difference between 'over_hearcosts` and `product_sales`. `total_profit`
//   create a function that will display the total total_profit but not for the customer
//
