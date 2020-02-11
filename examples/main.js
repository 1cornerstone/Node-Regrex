
 const nodeRegrex = require('../node-validator');

 console.log(nodeRegrex.isEmail("johnsmith3@gmail.com")); //output true

 console.log(nodeRegrex.noAlphanumeric("John smith4")); //output false it have number

 console.log(nodeRegrex.withAlphanumeric("John smith buy shoe at $100 ")); //output true

 console.log(nodeRegrex.isPhone("08100001111")); //output true



