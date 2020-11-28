/*
 * -------------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Actions
 * -------------------------------------
 */

 // Dependencies
 const { Movements, goals } = require('mineflayer-pathfinder')
 const { GoalFollow, GoalBlock } = goals
 const utils = require('./utilities')

 // Define actions object
 var actions = {}

 actions.followPlayer = (bot, username) => {
   const playerEntity = bot.players[username]

   if (!playerEntity) {
     bot.chat("I can't see you.")
     return
   }

   const movements = new Movements(bot, bot.mcData)
   const goal = new GoalFollow(playerEntity.entity, 1)

   bot.pathfinder.setMovements(movements)
   bot.pathfinder.setGoal(goal, true)
 }

 actions.stopTask = (bot) => {
   bot.pathfinder.setGoal()
 }

 actions.sayItems = (bot, items = bot.inventory.items()) => {
   let output = items.map(utils.itemToString).join(', ')

   if (output) {
     bot.chat(output)
   } else{
     bot.chat('Empty.')
   }
 }

 

 // Export Module
 module.exports = actions
