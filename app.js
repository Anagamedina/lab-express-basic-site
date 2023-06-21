const express = require("express");
const app = express();
const port = 3000;

//const handlebars = require("express-handlebars");
//app.engine("handlebars", handlebars.engine());
//app.set("view engine", "handlebars");
//app.set("views", "./views");

app.use(express.static("public"));
 
app.get("/", (req, res) => {
  res.sendFile( __dirname + "/views/home.html"  ); 
  // res.render("home", {
  //   title:"Welcome to my page"
  // }); 
});

app.get("/works", (req, res) => {
  //res.render("works"); 
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/about", (req, res) => {
  //res.render("about"); 
  res.sendFile(__dirname +  "/views/about.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
