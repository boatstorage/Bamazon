var mysql = require("mysql");
var inquirer = require("inquirer");
var stockQuantityArr = ["placeholder"];
var priceArr = ["placeholder"];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  
  user: "root",

  password: "",
  database: "bamazon"
});

connection.connect(function(err){
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
  	console.log(afterConnection);
  	queryAllitems();
    });

function queryAllitems() {
  connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;
     
  console.log("--------Bamazon Items------------");
  for (var i = 0; i < res.length; i++){

  console.log("item id: " + res[i].item_id + " | name: " + res[i].product_name + " | deptartment: " + res[i].deptartment_name + " | price: $" + res[i].price);
	};
	stockQuantityArr.push(res[i].stock_quantity);
	priceArr.push(res[i].price);

  connection.end();
  userPrompt();

});
};

function userPrompt() {
	inquirer
		.prompt([
		{
			name: "itemID",
			type: "input",
			message: "what is the item ID of the item that you would like to buy?"

		},
		{
			name: "units",
			type: "input",
			message: "how many would you like to buy?"
		}
		])
		.then(function(answer, error){
			if (error) {

		 	throw error;
			userPrompt();

		}else {
			var item = answer.itemID;
			var quantity = answer.units;
			quantityVerify(item, quantity);
			}

		
	})
}

// function quantityVerify(item, quantity){
// 	if (stockQuantityArr[item] < quantity ) {
// 		console.log("Insufficient quantity")
// 		userPrompt();
// 	}else {
// 		var updatedQuantity = stockQuantityArr[item] - quantity;
// 		var price = priceArr[item];
// 		updateDB(updatedQuantity, price, quantity);

// 	}

// }

// function updateDB(updatedQuantity, price, quantity, item) {
// 	var total = quantity * price;

// 	connection.query("UPDATE products SET stock_quantity ='" + updatedQuantity +  "'WHERE item_id ='" + item + "'", function(err, res) {
// 		if (err) throw err;
// 		console.log("Purchase complete. Your total is: $" + total);
// 	connection.end();
// 	})
// }





