/*
 * ----------------------------------------------
 * Alfred - Discord Bot | Command: List Commands
 * ----------------------------------------------
 */

 // Dependencies
 const actions = require('../lib/actions')

 // Command object
 let command = {
   name : 'list_commands',
   description : 'List all commands',
   execute(bot, args, username) {
     bot.chat(Array.from(bot.commands.keys()).join(', '))
   }
 }

 // Export command
 module.exports = command
