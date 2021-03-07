/*
 * -------------------------------------------
 * Alfred - Discord Bot | Command: List Items
 * -------------------------------------------
 */

 // Dependencies
 const actions = require('../lib/actions')

 // Command object
 let command = {
   name : 'list_items',
   description : 'List items',
   execute(bot, args, username) {
     actions.sayItems(bot)
   }
 }

 // Export command
 module.exports = command
