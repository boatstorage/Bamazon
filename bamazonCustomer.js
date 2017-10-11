var mysql = require("mysql");

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
  	connection.query('SELECT * from products', function(err, res){
    if (err) {
      console.log("whoops:", err);
      return;
    }

  console.log("--------Bamazon Items------------");
  for (var i = 0; i < res.length; i++){

  console.log("item id: " + res[i].item_id + " | name: " + res[i].product_name + " | deptartment: " + res[i].deptartment_name + " | price: " + res[i].price);
	}
  connection.end();
  });
})