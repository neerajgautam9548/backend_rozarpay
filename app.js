// app.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const Razorpay = require('razorpay');

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
// const razorpayInstance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID, // Use environment variables
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/privacy_policy",(req,res)=>{
  res.render("privacy_policy");
})

app.get("/terms",(req,res)=>{
  res.render("terms");
})

app.get("/refund",(req,res)=>{
  res.render("refund");
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
