/*
 * -----------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Index
 * -----------------------------------
 */

 // Dependencies
 const mineflayer = require('mineflayer')
 const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
 const { GoalFollow, GoalBlock } = goals

 // Config
 const config = require('./config')

 const bot = mineflayer.createBot({
   host : config.minecraft.host,
   port : config.minecraft.port,
   username : config.minecraft.bot.username,
   password : config.minecraft.bot.password
 })

 bot.loadPlugin(pathfinder)

 bot.once('spawn', () => {
   bot.mcData = require('minecraft-data')(bot.version)
 })

 bot.on('physicTick', () => {
   // Life signs
   const entity = bot.nearestEntity()
   if (entity) bot.lookAt(entity.position.offset(0, entity.height, 0))
 })

 const onChat = (username, message) => {
   const args = message.split(' ');

   if (args[0] === 'come') {
     followPlayer(username)
   }

   if (args[0] === 'stop') {
     stopTask()
   }
 }

 bot.on('chat', onChat)

 const followPlayer = (username) => {
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

 const stopTask = () => {
   bot.pathfinder.setGoal()
 }
