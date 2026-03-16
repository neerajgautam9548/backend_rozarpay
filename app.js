// app.js
const express = require('express');
const Razorpay = require('razorpay');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json()); // For parsing application/json

// const razorpayInstance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID, // Use environment variables
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });
app.get("/",(req,res)=>{
    console.log("chal raha hai");
    res.send("chal raha hai");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
