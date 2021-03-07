/*
 * -------------------------------------
 * Alfred - Discord Bot | Command: Stop
 * -------------------------------------
 */

 // Dependencies
 const actions = require('../lib/actions')

 // Command object
 let command = {
   name : 'stop',
   description : 'stop',
   execute(bot, args, username) {
     actions.stopTask(bot)
     bot.taskState = false
   }
 }

 // Export command
 module.exports = command
