/*
 * --------------------------------------
 * Alfred - Discord Bot | Command: Hello
 * --------------------------------------
 */

 // Dependencies


 // Command object
 let command = {
   name : 'hello',
   description : 'Greetings',
   execute(bot, args, username) {
     bot.chat(`Good day, Master ${username}`)
   }
 }

 // Export command
 module.exports = command
