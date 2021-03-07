/*
 * --------------------------------------
 * Alfred - Discord Bot | Command: Come
 * --------------------------------------
 */

 // Dependencies
 const actions = require('../lib/actions')

 // Command object
 let command = {
   name : 'come',
   description : 'Follow player',
   execute(bot, args, username) {
     actions.followPlayer(bot, username)
   }
 }

 // Export command
 module.exports = command
