const express = require("express");
const router = require("./src/routes/api");
const app = new express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");



// MongoDB Connection
let URL =
    "mongodb+srv://mdjahidur:mdjahidur19@cluster0.hb1y6.mongodb.net/Last-Assignment?retryWrites=true&w=majority";
mongoose
    .connect(URL)
    .then((res) => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });


app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());



app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);


//Route
app.set("etag", false);
app.use("/api/v1", router);



module.exports = app;