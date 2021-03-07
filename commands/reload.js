/*
 * ---------------------------------------
 * Alfred - Discord Bot | Command: Reload
 * ---------------------------------------
 */

 // Dependencies
 const commands = require('../lib/command_handler')

 // Command object
 let command = {
   name : 'reload',
   description : 'Reload commands',
   execute(bot, args, username) {
     commands.load(bot)
     bot.chat('Commands reloaded.')
   }
 }

 // Export command
 module.exports = command
