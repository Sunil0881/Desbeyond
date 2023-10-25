const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


const corsOptions = {
  origin: ['http://localhost:3001','http://desbeyond.vercel.app'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

const dbURI = process.env.MONGOURL;

//Connect mongodb
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
  
  app.use(express.json());

  const userRoutes = require('./routes/userroutes');
  app.use('/user', userRoutes);
  const authRoutes = require('./routes/authroutes');
  app.use('/auth', authRoutes);
  
  app.listen(3000, () => {
      console.log("Server started on port 3000");
  })

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
  })
