var mysql = require("mysql");
var inquirer = require("inquirer");

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

  console.log("item id: " + res[i].item_id + " | name: " + res[i].product_name + " | deptartment: " + res[i].deptartment_name + " | price: " + res[i].price);
	};
  connection.end();

});
};

function userPrompt() {
	inquirer
		.prompt(
		{
			name: "item id",
			type: "input",
			message: "what is the item ID of the item that you would like to buy?"

		},
		{
			name: "units",
			type: "input",
			message: "how many would you like to buy?"
		}
		)
}


