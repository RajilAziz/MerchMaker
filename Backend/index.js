const express = require("express");
const util = require("./routers/util");
const api_config = require("./config")

const { createServer } = require("http");
const { Server } = require("socket.io");

// const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

const stripe_sk="pk_test_51LojzRSH0DkD8It1V0m2Gisxfk8s3M6OYwwPyAMkwnwJ9rPkJJ6WznbKZk1ve89rc2GyZCyHh2N7q8PbwBiDoRdE00rtbPoOiI"
const stripe=require("stripe")(stripe_sk)
const app = express();

const port = process.env.PORT || api_config.port;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" },
});


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000?success=true`,
    cancel_url: `http://localhost:3000?canceled=true`,
  });
  console.log(session);

  res.redirect(303, session.url);
});

//on function is used to recieve event
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
});

const usersRouter = require("./routers/usersRouter");

const contactRouter=require("./routers/contactRouter")

const orderRouter=require("./routers/orderRouter")

//import user router

const cors = require("cors");

// to allow  react frontend to access the backend
app.use(cors({ origin: "http://localhost:3000" }));

//to parse json data
app.use(express.json());

//middlewares - to intercept request
app.use("/users", usersRouter);

app.use("/contact",contactRouter);

app.use("/order",orderRouter)

app.get("/home", (req, res) => {
  //route for process get reuest
  res.send("Hello Express!");
});

app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: "inr",
  });
  res.status(200).json(paymentIntent);
});

httpServer.listen(port, () => {
  //for run express into lan and change infront whre localhost 5000 are written
  console.log("the server has started");
});
