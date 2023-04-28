// connect to local blockchain node
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const blockchain = require("./controller/blockchain-controller");
const accounts = require("./data/accounts");

app.use(bodyParser.json());

app.use(cors());

app.use("/api/block-chain", blockchain);

app.use("/api/login", (req, res) => {
  if (req.body.username === "admin" && req.body.password === "admin") {
    res.send({
      status: true,
      message: "Login successful",
      data: {
        chairman: accounts[0],
      },
    });
  } else {
    res.send({ status: false, message: "Invalid credentials" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
