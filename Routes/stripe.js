// blocblock; /* Stripe API */
var express = require("express");
var app = express();
const stripe = require("stripe")("sk_test_51Ij8YEG6zbay2s8VNmg9YfLuQ5RmRKBkCNS3W6QmZAbCFM04IP0z02uhnwmYUxxfBaF9r9MiHFSlv29jKODhj36u00Mdlj6QCY");
app.use(express.json());
//This is createCustomer
app.post("/create-customer", (req, res) => {
  stripe.customers.create(req.body, function (err, customer) {
    if (err) {
      console.log("Error:" + err);
    } else if (customer) {
      console.log("Success" + JSON.stringify(customer, null, 2));
      res.send(customer);
    } else {
      console.log("something else");
    }
  });
});
//This is retrieveCustomer
app.get("/customer/:id", (req, res) => {
  const id = req.params.id;
  stripe.customers.retrieve(id, function (err, customer) {
    if (err) {
      console.log("Error:" + err);
    } else if (customer) {
      console.log("Successful" + JSON.stringify(customer, null, 2));
      res.send(customer);
    } else {
      console.log("Something else");
    }
  });
});
//This is CreateToken
app.post("/create-token", (req, res) => {
  const param = {
    card: {
      number: req.body.number,
      exp_month: req.body.exp_month,
      exp_year: req.body.exp_year,
      cvc: req.body.cvc,
    },
  };
  stripe.tokens.create(param, function (err, token) {
    if (err) {
      console.log("Error:" + err);
      res.send(err);
    } else if (token) {
      console.log("Successful" + JSON.stringify(token, null, 2));
      res.send(token);
    } else {
      console.log("Something else");
      res.send(err);
    }
  });
});
/*
var createToken = function () {
 var param = {};
 param.card = {
 number: "4242424242424242",
 exp_month: 2,
 exp_year: 2024,
 cvc: "212",
 };
 stripe.tokens.create(param, function (err, token) {
 if (err) {
 console.log("Error:" + err);
 } else if (token) {
 console.log("Successful" + JSON.stringify(token, null, 2));
 } else {
 console.log("Something else");
 }
 });
};*/
//This is the addCardToCustomer
app.post("/add-card-to-customer", (req, res) => {
  const customerId = req.body.customerId;
  const tokenId = req.body.tokenId;
  stripe.customers.createSource(customerId, { source: tokenId }, function (err, card) {
    if (err) {
      console.log("Error:" + err);
      res.send(err);
    } else if (card) {
      res.send(card);
      console.log("Successful" + JSON.stringify(card, null, 2));
    } else {
      console.log("Something else");
      res.send(err);
    }
  });
});
/*var addCardToCustomer = function () {
 stripe.customers.createSource(
 "customer ID",
 { source: "token ID" },
 function (err, card) {
 if (err) {
 console.log("Error:" + err);
 } else if (card) {
 console.log("Successful" + JSON.stringify(card, null, 2));
 } else {
 console.log("Something else");
 }
 }
 );
};*/
//addCardToCustomer();
//This is the deleteCustomerCard
app.post("/delete-card", (req, res) => {
  const customerId = req.body.customerId;
  const cardId = req.body.cardId;
  stripe.customers.deleteSource(customerId, cardId);
  res.status(201).send();
});
/*var deleteCustomerCard = function () {
 stripe.customers.deleteSource("customer ID", "card ID");
};*/
//This is the chargeCustomerTroughID
app.post("/charge-customer", (req, res) => {
  const param = {
    amount: req.body.amount,
    currency: "usd",
    customer: req.body.customer,
  };
  stripe.charges.create(param, function (err, charge) {
    if (err) {
      console.log("Error:" + err);
      res.send(err);
    } else if (charge) {
      console.log("Successful" + JSON.stringify(charge, null, 2));
      res.send(charge);
    } else {
      console.log("Something else");
      res.send(err);
    }
  });
});
/*var chargeCustomerThroughID = function () {
 var param = {
 amount: "2000",
 currency: "usd",
 customer: "customer ID",
 };
 stripe.charges.create(param, function (err, charge) {
 if (err) {
 console.log("Error:" + err);
 } else if (charge) {
 console.log("Successful" + JSON.stringify(charge, null, 2));
 } else {
 console.log("Something else");
 }
 });
};*/
app.get("/get-card", (req, res) => {
  const token = req.body.token;
  stripe.tokens.retrieve(token, function (err, token) {
    if (err) {
      console.log("Error:" + err);
    } else if (token) {
      console.log("Successful" + JSON.stringify(token, null, 2));
      res.status(200).send(token);
      res.send(token);
    } else {
      console.log("Something else");
    }
  });
});
module.exports = app;
