const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger("dev"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connection to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true});

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Server start
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});