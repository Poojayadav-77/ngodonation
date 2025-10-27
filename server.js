const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("home"));
app.get("/update", (req, res) => res.render("home"));
app.get("/donate", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("home"));
app.get("/history", (req, res) => res.render("home"));
app.get("/login", (req, res) => res.render("home"));

app.listen(3000, () => console.log("✅ Server running on port 3000"));
