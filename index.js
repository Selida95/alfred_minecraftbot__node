/*
 * -----------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Index
 * -----------------------------------
 */

 // Dependencies
 const mineflayer = require('mineflayer')
 const { pathfinder } = require('mineflayer-pathfinder')
 const actions = require('./actions')

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
     actions.followPlayer(bot, username)
   }

   if (args[0] === 'stop') {
     actions.stopTask(bot)
   }
 }

 bot.on('chat', onChat)
