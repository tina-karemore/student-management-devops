require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Student = require("./models/Student");
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB atlas connected"))
    .catch(err => console.log(err));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const students = await Student.find();
    res.render("index", { students });
});

app.get("/students/new", (req, res) => {
    res.render("new");
});

app.post("/students", async (req, res) => {
    await Student.create(req.body);
    res.redirect("/");
});

app.get("/students/:id/edit", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
});

app.post("/students/:id/update", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

app.post("/students/:id/delete", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
});
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});