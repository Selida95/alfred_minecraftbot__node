/*
 * -------------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Actions
 * -------------------------------------
 */

 // Dependencies
 const { Movements, goals } = require('mineflayer-pathfinder')
 const { GoalFollow, GoalBlock } = goals

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

 // Export Module
 module.exports = actions
