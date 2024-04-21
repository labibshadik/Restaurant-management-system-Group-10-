const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
require('dotenv').config()
const nodemailer = require('nodemailer');

// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose

mongoose
  .connect(
    `mongodb+srv://mdasifulalam10:aso_tomare_ador_kori@test-swappr.gcn2y8o.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    console.log("MongoDB Connected Successfully!")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));

  // jwt authentication
  app.post('/jwt', async(req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1hr'
    })
    res.send({token});
  })

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'swappr.bracu@gmail.com', // Your Gmail username
    pass: 'obeebkifconqybyw' // 
  }
});

// Route to send confirmation email
app.post('/send-email', async (req, res) => {
  const { recipientEmail, message } = req.body;
  console.log(recipientEmail, message)
  try {
    // Send email
    await transporter.sendMail({
      from: 'swappr.bracu@gmail.com',
      to: recipientEmail,
      subject: 'Confirmation Email',
      text: message
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});


//   import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const userRoutes = require('./api/routes/userRoutes')
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes);
app.use('/users', userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
