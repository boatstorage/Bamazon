DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	deptartment_name VARCHAR(50) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, deptartment_name, price, stock_quantity)
VALUES ("Red lipstick", "health and beauty", 19.95, 200);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("Gold highlighter", "health and beauty", 35.00, 300);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("purple pants", "womens clothing", 60.50, 100);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("gray wool sweater", "mens clothing", 80.00, 5);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("yoga mat", "sports and fitness", 35.00, 75);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("headphones", "electronics", 200.00, 50);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("terrycloth bathtowel", "home", 14.95, 350);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("The Joy of Cooking", "books", 25.00, 50);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("Star Wars", "movies", 20.00, 500);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("Vanilla bean", "grocery", 14.95, 5);

INSERT INTO products (product_name, deptartment_name, price,stock_quantity)
VALUES ("coconut sparkling water", "grocery", 5.00, 30);

Error Code: 1136. Column count doesn't match value count at row 1





