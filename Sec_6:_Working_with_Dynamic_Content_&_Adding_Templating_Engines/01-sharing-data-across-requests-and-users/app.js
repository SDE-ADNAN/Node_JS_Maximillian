const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine(
  "hbs",
  expressHbs({ layoutsDir: "views/layouts", defaultLayout: "main-layout" , extname:'hbs'})
); //  we need to use this type of import for the templating engine which does'nt sheeps along with  express ( in case of pug ,  it was directly shipped along with express )
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.render("404", { pageTitle: "Page Not Found !!" });
});
console.warn(`Running at : ${port}`);
app.listen(port);
