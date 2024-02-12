const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const rootRouter=require('./Routes/index') 

require('dotenv').config();
const app = express()
const port = 3000
app.use(cors());
app.use(express.json())

const uri=process.env.URI
if (!uri) {
    console.error('MongoDB URI is not defined in the environment variables.');
    process.exit(1);
  }
  mongoose.connect(uri , { dbName: "Blog-data"})
app.use("/api/v1",rootRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})