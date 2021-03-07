/*
 * -------------------------------------
 * Alfred - Discord Bot | Command: Quit
 * -------------------------------------
 */

 // Dependencies

 // Command object
 let command = {
   name : 'quit',
   description : 'Quit game.',
   execute(bot, args, username) {
     bot.chat('Good night, sir.')
     setTimeout(() => {
       bot.quit()
     }, 2000)
   }
 }

 // Export command
 module.exports = command
