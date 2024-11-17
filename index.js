const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Product = require('./modals/Product.js');
const productRoute = require('./routes/ProductRoute.js');
const authRoute = require('./routes/authRoute.js');

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/product', productRoute);
app.use("/api/auth", authRoute);


app.get("/", (req,res) =>{
  res.send("Hello World");
})
mongoose
  .connect('mongodb+srv://sivamsp513:cBtX2HfsMWLepFmT@cluster0.udf5s.mongodb.net/NODE_API')
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(3000, () => {
      console.log('Server running on port 3000...');
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });

  