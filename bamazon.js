//i need to create a mysql variable
var mysql = require ("mysql");
//create variable for connection
var connection = mysql.creatConnection({
  //with host, port, user, password and databas
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamaszon"
});

connection.connect(function(err){
  if (err) throw err;
  diplayInStock();
});
// create function for node, will display items on sale
//   this function should display id, name and price
funtion displayInStock() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Please choose which information you want to see?",
      choices: [
        "ID",
        "Name",
        "Price"
      ]
    })
    .then(function(anwser){
      switch (answer.action){
        case "ID":
        queryItems();
        breake;

        case "Name":
        queryItems();
        breake;

        case "Price":
        queryItems();
        breake;
      }
    });
}
function queryItems() {

    .prompt({
      name: "action",
      type: "list",
      message: "Please choose which information you want to see?",
      choices: [
        "ID",
        "Name",
        "Price"
      ]
    })
      .then(function(answer){
        console.log(answer.)
      })
}
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
