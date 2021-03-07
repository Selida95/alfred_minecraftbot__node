/*
 * -------------------------------------
 * Alfred - Discord Bot | Command: Toss
 * -------------------------------------
 */

 // Dependencies
 const actions = require('../lib/actions')

 // Command object
 let command = {
   name : 'toss',
   description : 'Toss requested item',
   execute(bot, args, username) {
     let item = args[1] ? args[1] : false
     let amount = args[2] ? args[2] : 1

     if (item) {
       actions.tossItem(bot, item, amount)
     }
   }
 }

 // Export command
 module.exports = command
