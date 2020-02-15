
   Node-Regrex : validate request body or param prevent your databse from sql injection

  Validating user input without writing boilerplate code or nested if statement.
  
    const nodeRegrex  = require('node-validator')
   
      console.log(nodeRegrex.noAlphanumeric("john smith"))
      console.log(nodeRegrex.noAlphanumber("John smith2"))
      
      output1 : true
      output1 : false
      
      
     noAlphanumeric : validate short or long words. 
         case : can accept white space ,
                can accept lower or upper case letters,
                 cannot accept numbers.
                 
           example: lorem ipsum            
                       
       withoAlphanumeric : validate short or long words. 
        case : can accept white space ,
                      can accept lower or upper case letters,
                       can not accept alphanumeric,
                        can accept numbers
         example: pizza is #100                 
                       
      isEmail :  validate email . 
         case : cannot accept white space 
                 can accept lower or upper case letters.
           example: loremipsum@mail.com                 
      
      isPhone:  validate Phonenumber . 
         case : cannot accept white space 
                 cannot accept lower or upper case letters,
                 only numbers is accepted
         example:  08100001111  
                      
                      
                     
you can pull request and add more functions to the lib , also make sure you write test
