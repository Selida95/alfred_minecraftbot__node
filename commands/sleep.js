/*
 * --------------------------------------
 * Alfred - Discord Bot | Command: Sleep
 * --------------------------------------
 */

 // Dependencies
 const { Movements, goals } = require('mineflayer-pathfinder')
 const { GoalNear, GoalBlock } = goals

 // Command object
 let command = {
   name : 'sleep',
   description : 'Sleep',
   execute: async (bot, args, username) => {
     let bed = bot.findBlock({
       matching: block => bot.isABed(block)
     })
     console.log(bed.position)
     let { x: bedX, y: bedY, z: bedZ } = bed.position

     const movements = new Movements(bot, bot.mcData)

     if (bed) {
       try {
         bot.taskState = true
         await bot.pathfinder.setMovements(movements)
         await bot.pathfinder.setGoal(new GoalNear(bedX, bedY, bedZ, 1))
         await bot.sleep(bed)
         bot.chat("I'm sleeping.")
       } catch (error) {
         bot.taskState = false
         bot.chat(`I can't sleep: ${error.message}`)
       }
     } else {
       bot.taskState = false
       bot.chat('No nearby bed.')
     }
   }
 }

 // Export command
 module.exports = command
