const express = require("express");
const util = require("./routers/util");
const api_config = require("./config")

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const port = api_config.port;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" },
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

httpServer.listen(port, () => {
  //for run express into lan and change infront whre localhost 5000 are written
  console.log("the server has started");
});
