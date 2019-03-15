DROP DATABASE IF EXISTS bamazon;
// create a database called BAMAZON
CREATE DATABASE bamazon;
// create a table called products
USE bamazon;
CREATE TABLE products (
//   create item_id (primary key and not null)
  id INT NOT NULL AUTO_INCREMENT,
//   create product_name
  product_name VARCHAR(200) NULL,
//   create department_name
  department_name VARCHAR(200) NULL,
//   create price
  price DECIMAL (10,4),
//   create stock_quantity
  stock_quantity INT (255),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES(" Anti-Bacterial Cleaning Spray", "Home", 3.75, 85);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Carrot", "Produce", 0.25, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Flank Steak", "Meat", 11.89, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Toilet Paper", "Home", 12.78, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Shelled Shrimp", "Seafood", 15.75, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Peanut Butter", "Breakfast", 1.53, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Diaper", "Baby", 38.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Vinegar", "Condements", 4.58, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Grapes", "Produce", 1.29, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Milk", "Dairy", 5.59, 9);
