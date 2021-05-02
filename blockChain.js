let hash = require("object-hash");
let validator = require("./validator");
let mongoose = require("mongoose");
let blockChainModel = mongoose.model("BlockChain");
let chalk = require("chalk");
const firebase = require("./database/db");
const firestore = firebase.firestore();

const TARGET_HASH = hash(1);

class blockChain {
  constructor() {
    // Create the chain
    this.chain = [];
    // Data
    this.curr_data = [];
  }

  getLastBlock(callback) {
    // Get last block from DB
    return blockChainModel.findOne({}, null, { sort: { _id: -1 }, limit: 1 }, (err, block) => {
      if (err) return console.error("Cannot find Last Block");
      return callback(block);
    });
  }

  addNewBlock(prevHash) {
    let block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      data: this.curr_data,
      prevHash: prevHash,
    };
    // Validate
    if (validator.proofOfWork() == TARGET_HASH) {
      block.hash = hash(block);

      this.getLastBlock((lastBlock) => {
        if (lastBlock) {
          block.prevHash = lastBlock.hash;
        }
        // Add it to the instance, Save it to DB, Console Success
        let newBlock = new blockChainModel(block);
        console.log(chalk.blue(block));
        const data = {
          timestamp: "2021-05-01T18:07:48.120Z",
          data: [
            {
              userName: "hanzala",
              indexName: "Exchange.indexName",
              indexAmount: "Exchange.text1",
              indexPrice: "last_sale",
              transPrice: "Exchange.text2",
              transType: "buyState",
            },
          ],
          _id: "608d98f42201b63688ce9252",
          index: 1,
          prevHash: "f82efe0dded03074162c0ef6db7972a2389d86aa",
          hash: "103e953ca6b02be99d72c618c2020d8023b8a7f3",
        };

        // firestore.collection("blocks").doc().set(newBlock);

        newBlock.save((err) => {
          if (err) return console.log(chalk.red("Cannot save Block to DB", err.message));
          console.log(chalk.green("New Block Saved on DB"));
          // Add to the Chain
          this.chain.push(block);
          this.curr_data = [];
          return block;
        });
      });
    }
  }

  addNewData(userName, indexName, indexAmount, indexPrice, transPrice, transType) {
    this.curr_data.push({ userName, indexName, indexAmount, indexPrice, transPrice, transType });
  }

  lastBlock() {
    this.chain.slice(-1)[0];
  }

  isEmpty() {
    return this.chain.length == 0;
  }
}

module.exports = blockChain;
