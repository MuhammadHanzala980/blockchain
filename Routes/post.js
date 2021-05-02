const express = require("express");
let BlockChain = require("../blockChain");
const route = express.Router();

route.post("/postData", (req, res) => {
  // console.log("Running ==»»", req.body);
  let blockChain = new BlockChain();
  let hash = require("object-hash");
  blockChain.addNewData(req.body.userName, req.body.indexName, req.body.text2, req.body.last_sale, req.body.text1, req.body.buyState);
  blockChain.addNewBlock(null);

  // console.log("Chain: ", blockChain.chain);

  res.send({
    data: blockChain.chain,
  });
});

module.exports = route;
