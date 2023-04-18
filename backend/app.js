// connect to local blockchain node
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const blockchain = require("./controller/blockchain-controller");

app.use(bodyParser.json());

app.use(cors());

app.use("/api/block-chain", blockchain);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
