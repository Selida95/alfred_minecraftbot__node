/*
 * -----------------------------------------------
 * Alfred - Discord Bot | Command: Minecraft Days
 * -----------------------------------------------
 */

 // Dependencies

 // Command object
 let command = {
   name : 'minecraft_day',
   description : 'Returns how many minecraft days the world has existed for.',
   execute(bot, args, username) {
     bot.chat(`This world has existed for ${bot.time.day} days.`)
     console.log(bot.time.day/365)
   }
 }

 // Export command
 module.exports = command
