
 const {isNumber,isEmail,noAlphanumeric,withAlphanumeric,isPhone} = require('../node-validator');

 console.log(isEmail("johnsmith3@gmail.com")); //output true

 console.log(noAlphanumeric("John smith4")); //output false it have digit

 console.log(withAlphanumeric("John smith buy shoe at $100 ")); //output true

 console.log(isPhone("08100001111")); //output true

 console.log(isNumber('123')); // output true
 console.log(isNumber('12e3')); // output false



